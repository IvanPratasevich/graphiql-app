import { Main } from './src/Page/Main/Main';
import { SignIn } from './src/Page/SignIn/SignIn';
import { SignUp } from './src/Page/SignUp/SignUp';
import { Welcome } from './src/Page/Welcome/Welcome';
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
