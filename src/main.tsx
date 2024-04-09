import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ComponentsPage } from './routes/components'; // Fix the casing of the import statement

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Theme } from './theme/theme';
import reset from 'styled-reset';
import { LoginPage } from './routes/loginPage';
import { HomePage } from './routes/homePage';
import { UploadDocument } from './routes/uploadDocument';

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
            background-color: #191A1C;
        }
        p {
            color: #fff;
        }
        `;

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
  {
    path: '/uploadDocument',
    element: <UploadDocument />,
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
