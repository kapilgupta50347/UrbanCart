import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { CartProvider as AppCartProvider } from '@/hooks/useCart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppCartProvider>
      <App />
    </AppCartProvider>
  </>
);