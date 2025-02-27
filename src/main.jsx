import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Products from './Components/Products/Products.jsx'
import Home from './Components/Home/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products',
        element:<Products/>,
        loader: fetch('/public/product.json')
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
