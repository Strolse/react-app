import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from '../fetchArticleList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticleList/fetchArticlesList');

describe('fetchNextArticlesPage', () => {
  test('works correctly', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: true,
        limit: 5,
        page: 2,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalled();
  });

  test('fetchArticlesList is not called when hasMore:false', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: false,
        limit: 5,
        page: 2,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('fetchArticlesList is not called when isLoading: true', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: true,
        hasMore: true,
        limit: 5,
        page: 2,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
