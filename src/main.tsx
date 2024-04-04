import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ComponentsPage } from './routes/components'; // Fix the casing of the import statement

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Theme } from './theme/theme';
import reset from 'styled-reset';
import { LoginPage } from './routes/loginPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const GlobalStyle = createGlobalStyle`
        ${reset}
        @font-face {
            font-family: 'MartianMono';
            src: url('./fonts/MartianMono-VariableFont.ttf') format('truetype');
          }
        * {
            box-sizing: border-box;
        }
        body {
            background-color: #222C35;
        }
        p {
            color: #fff;
        }
        `;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/components',
    element: <ComponentsPage />,
  },
]);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
