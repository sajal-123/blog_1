import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/index.ts'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const querryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={querryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>,
)
