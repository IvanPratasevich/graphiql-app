import { useState } from 'react';
import './App.css';
import { Button } from '@mantine/core';
import { useRoutes, Navigate, useLocation } from 'react-router';

function App() {
  const routes = useRoutes([
    { path: '/', element: <h1>GraphiQL route</h1> },
    { path: '/welcome', element: <h1>Welcome route</h1> },
    { path: '/404', element: <h1>Not found route</h1> },
    { path: '*', element: <Navigate to={'/404'} /> },
  ]);

  const location = useLocation();

  const [count, setCount] = useState(0);

  return (
    <>
      {location.pathname}
      {routes}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={
              'https://raw.githubusercontent.com/vitejs/vite/229c5925c8c84709b8e06e8092a255cb820dafc9/docs/public/logo.svg'
            }
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={
              'https://w1.pngwing.com/pngs/196/853/png-transparent-react-logo-javascript-stack-overflow-front-and-back-ends-github-freecodecamp-redux-computer-software.png'
            }
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="outline" radius="md" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
