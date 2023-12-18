import { lazy } from 'react';

export const AboutPageAsync = lazy(
  async () => new Promise((resolve) => {
    setTimeout(() => {
      // @ts-expect-error mock
      resolve(import('./AboutPage'));
    }, 1500);
  }),
);
