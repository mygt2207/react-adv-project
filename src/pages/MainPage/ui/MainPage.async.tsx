import { lazy } from 'react';

export const MainPageAsync = lazy(
  async () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error mock
        resolve(import('./MainPage'));
      }, 1500);
    })
);
