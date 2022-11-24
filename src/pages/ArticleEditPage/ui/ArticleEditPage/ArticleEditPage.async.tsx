import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // временно для отображеняя loading...
  setTimeout(() => resolve(import('./ArticleEditPage')), 500);
}));
