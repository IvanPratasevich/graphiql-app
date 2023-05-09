import React from 'react';
import { MantineProvider, MantineTheme } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../index.scss';
import './firebase/firebase';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        components: {
          NavLink: {
            styles: (theme: MantineTheme) => ({
              root: {
                'span.mantine-NavLink-label': { fontSize: theme.spacing.md, fontWeight: 600 },
                width: 'auto',
              },
            }),
          },
          Image: {
            styles: () => ({
              root: {
                'img.mantine-Image-image': {
                  objectPosition: 'top',
                },
              },
            }),
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
