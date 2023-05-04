import React from 'react';
import {Navigate, useLocation, useRoutes} from "react-router";

const Layout = () => {
    const location = useLocation();
    const routes = useRoutes([
        { path: '/', element: <h1>Welcome route</h1> },
        { path: '/graphql', element: <h1>GraphiQL route</h1> },
        { path: '/404', element: <h1>Not found route</h1> },
        { path: '*', element: <Navigate to={'/404'} /> },
    ]);

    return (
        <main>
            {location.pathname}
            {routes}
        </main>
    );
};

export default Layout;
