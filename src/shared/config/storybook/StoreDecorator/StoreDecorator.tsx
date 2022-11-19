import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ScrollRestorationReducer } from 'features/ScrollRestoration';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  scrollRestoration: ScrollRestorationReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  articlesPage: articlesPageReducer,
};

export const StoreDecorator = (
  store: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={store}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
