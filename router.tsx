import { lazy } from 'react';

const Main = lazy(() => import('./src/Page/Main/Main'));
const SignIn = lazy(() => import('./src/Page/SignIn/SignIn'));
const SignUp = lazy(() => import('./src/Page/SignUp/SignUp'));
const Welcome = lazy(() => import('./src/Page/Welcome/Welcome'));

import { SIGNIN_ROUTE, SIGNUP_ROUTE, MAIN_ROUTE, WELCOME_ROUTE } from './src/utils/consts';

export const publicRoutes = [
  {
    path: SIGNUP_ROUTE,
    Component: <SignUp />,
  },
  {
    path: SIGNIN_ROUTE,
    Component: <SignIn />,
  },
  {
    path: WELCOME_ROUTE,
    Component: <Welcome />,
  },
];
export const privateRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <Main />,
  },
  {
    path: WELCOME_ROUTE,
    Component: <Welcome />,
  },
];
