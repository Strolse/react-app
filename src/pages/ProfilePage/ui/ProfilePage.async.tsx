import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // временно для отображеняя loading...
  setTimeout(() => resolve(import('./ProfilePage')), 2000);
}));
