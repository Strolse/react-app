import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { ScrollRestorationReducer } from 'features/ScrollRestoration';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  scrollRestoration: ScrollRestorationReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesDetailsPage: articleDetailsPageReducer,
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
