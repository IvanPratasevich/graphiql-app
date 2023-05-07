import { useRoutes, Navigate } from 'react-router';
import Header from './components/Header/Header';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Navigate to={'/welcome'} /> },
    { path: '/welcome', element: <h1>Welcome route</h1> },
    { path: '/404', element: <h1>Not found route</h1> },
    { path: '*', element: <Navigate to={'/404'} /> },
  ]);

  return (
    <>
      <Header />
      {routes}
    </>
  );
}

export default App;
