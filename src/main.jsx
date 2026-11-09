import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/HomePage.jsx'
import Reading from './pages/ReadingPage.jsx'
import DailyCard from './pages/DailyCardPage.jsx'
import './index.css'
import App from './App.jsx'


const pages = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/reading",
        element: <Reading />
      },
      {
        path: "/daily-card",
        element: <DailyCard />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={pages} />
  </StrictMode>,
)
