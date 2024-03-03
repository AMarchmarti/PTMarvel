import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/main.tsx'
import { FavoritesProvider } from './context/FavoriteContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>,
)
