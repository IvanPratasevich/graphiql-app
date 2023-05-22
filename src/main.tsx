import React from 'react';
import { MantineProvider, MantineTheme } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../index.scss';
import './firebase/firebase';
import './services/localization';

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

          Modal: {
            styles: () => ({
              root: {
                '.mantine-Modal-header': { display: 'none' },
                '.mantine-Modal-close': { display: 'none' },
                '.mantine-Modal-body': { padding: '0px' },
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
