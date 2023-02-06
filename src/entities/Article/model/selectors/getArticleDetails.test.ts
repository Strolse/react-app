import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './getArticleDetails';

describe('getArticleDetailsData', () => {
  test('returns data', () => {
    const data = {
      id: '1',
      title: 'title',
    };
    const state:DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('works with empty state', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});

describe('getArticleDetailsIsLoading', () => {
  test('returns isLoading value', () => {
    const state:DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('works with empty state', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });
});

describe('getArticleDetailsError', () => {
  test('returns error', () => {
    const state:DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('works with empty state', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
