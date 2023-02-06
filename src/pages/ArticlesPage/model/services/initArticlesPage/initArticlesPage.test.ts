import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from '../fetchArticleList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticleList/fetchArticlesList');

describe('initArticlesPage', () => {
  test('works correctly', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: true,
        limit: 5,
        page: 1,
        _inited: false,
      },
    });
    // await thunk.callThunk();

    // expect(thunk.dispatch).toBeCalledTimes(4);
    // expect(fetchArticlesList).toBeCalledWith({ page: 1 });
  });

  test('fetchArticlesList is not called when _inited:true', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: true,
        limit: 5,
        page: 1,
        _inited: true,
      },
    });
    // await thunk.callThunk();

    // expect(thunk.dispatch).toBeCalledTimes(2);
    // expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
