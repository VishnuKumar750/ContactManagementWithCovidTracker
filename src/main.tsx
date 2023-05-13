import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './redux/Store';

const queryClient = new QueryClient();

// Render the application root component
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Set up the browser router for routing */}
    <BrowserRouter>
      {/* Provide the query client to the application */}
      <QueryClientProvider client={queryClient}>
        {/* Provide the Redux store to the application */}
        <Provider store={store}>
          {/* Render the main application component */}
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
