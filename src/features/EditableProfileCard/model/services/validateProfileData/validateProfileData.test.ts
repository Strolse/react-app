import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
  first: 'Иван',
  lastname: 'Петров',
  age: 32,
  country: Country.Russia,
  city: 'Москва',
  username: 'admin',
  currency: Currency.RUB,
};

describe('validateProfileData', () => {
  test('returns empty error array, when the user entered correct profile data', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('empty first or lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('some errors', async () => {
    const result = validateProfileData({
      ...data, first: '', lastname: '', age: undefined, country: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]);
  });
});
