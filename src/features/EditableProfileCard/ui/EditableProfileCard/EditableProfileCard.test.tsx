import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  first: 'Ann',
  lastname: 'Li',
  age: 18,
  username: 'annli',
  country: Country.Belarus,
  currency: Currency.EUR,
  city: 'Minsk',
};

const options = {
  initialState: {
    profile: {
      data: profile,
      readonly: true,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
      },
    },
  },
  asyncReducer: { profile: profileReducer },
};

describe('EditableProfileCard', () => {
  test('changes readonly strict, when the user clicks on editButton', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
    expect(screen.getByTestId('EditableProfilePageHeader.CancelButton')).toBeInTheDocument();
  });

  test('do not save a new data, if the user clicks on cancelButton', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'Liza');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'Cat');
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Liza');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Cat');

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.CancelButton'));
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Ann');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Li');
  });

  test('throws error, if the user tries to save the data with empty field', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));
    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('sends PUT request, if the user tries to save the correct data', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    const mockPutReq = jest.spyOn($api, 'put');

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'Liza');
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));
    expect(mockPutReq).toHaveBeenCalled();
  });
});
