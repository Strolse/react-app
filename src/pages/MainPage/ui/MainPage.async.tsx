import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // временно для отображеняя loading...
  setTimeout(() => resolve(import('./MainPage')), 2000);
}));
