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

          Drawer: {
            styles: (theme) => ({
              root: {
                '.mantine-Drawer-header': { display: 'none' },
                '.mantine-Drawer-body': { padding: '0px' },
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

          Spoiler: {
            styles: () => ({
              root: {
                'mantine-nqbdy3': {
                  width: '100%',
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
