import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // временно для отображеняя loading...
  setTimeout(() => resolve(import('./LoginForm')), 2000);
}));
