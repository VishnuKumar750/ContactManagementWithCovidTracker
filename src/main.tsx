import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import store from './redux/Store'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
              <App  />
          </Provider>
        </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
