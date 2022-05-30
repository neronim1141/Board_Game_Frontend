import React from 'react';
import ReactDOM from 'react-dom/client';
import './browser.css';
import './index.css';
import '@unocss/reset/tailwind.css';
import axios from 'axios';

import 'uno.css';
import { Providers } from './appProviders';
import { MainRoutes } from './router/main-routes';
import { BrowserRouter } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_BASE_URL ?? 'localhost:3001';
axios.defaults.baseURL = baseUrl;

const prepare = async () => {
  if (import.meta.env.DEV && import.meta.env.VITE_MOCK_REQUESTS === 'true') {
    const { worker } = await import('../mocks/browser');
    return worker.start();
  }
};

const root = document.getElementById('root');

if (root) {
  prepare().then(() => {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <Providers>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </Providers>
      </React.StrictMode>
    );
  });
}
