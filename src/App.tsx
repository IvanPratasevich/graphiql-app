import { useRoutes, Navigate } from 'react-router';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Navigate to={'/welcome'} /> },
    { path: '/welcome', element: <Welcome /> },
    { path: '/404', element: <h1>Not found route</h1> },
    { path: '*', element: <Navigate to={'/404'} /> },
  ]);

  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
}

export default App;
