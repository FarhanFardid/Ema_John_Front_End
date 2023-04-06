import React from 'react'
import ReactDOM from 'react-dom/client'


import Shop from '../src/components/Shop/Shop'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Order from './components/Order/Order'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import cartProductLoader from './Loaders/cartProductLoaders'
import Checkout from './components/Checkout/Checkout'

const router = createBrowserRouter([
  {
   path: '/',
   element: <Home></Home>,
   children: [
    {
      path: '/',
      element:<Shop></Shop>
    },
    {
      path: '/orders',
      element:<Order></Order>,
      loader: cartProductLoader
    },
    {
      path: '/checkout',
      element: <Checkout></Checkout>
    }
    ,
    {
      path: '/inventory',
      element: <Inventory></Inventory>

    },
    {
      path: '/login',
      element: <Login></Login>
    }
   ]
}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
