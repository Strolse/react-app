import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // временно для отображеняя loading...
  setTimeout(() => resolve(import('./AboutPage')), 2000);
}));
