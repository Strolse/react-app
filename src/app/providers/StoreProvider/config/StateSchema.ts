import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ScrollRestorationSchema } from 'features/ScrollRestoration';
import {
  ArticleDetailsPageSchema,
} from 'pages/ArticleDetailsPage';
import { articlesPageSchema as ArticlesPageSchema } from 'pages/ArticlesPage';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollRestoration: ScrollRestorationSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articlesDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface reducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>;
    add: (key:StateSchemaKey, reducer: Reducer) => void;
    remove: (key:StateSchemaKey) => void;
    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers;
  }

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: reducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
