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
import SignUp from './components/Sign Up/SignUp'
import AuthProvider from './Providers/AuthProvider'
import PrivateRoutes from './Routes/PrivateRoutes'

const router = createBrowserRouter([
  {
   path: '/',
   element: <Home></Home>,
   children: [
    {
      path: '/',
      element:<Shop></Shop>,
      loader: ()=> fetch('http://localhost:5000/totalProducts')
    },
    {
      path: 'orders',
      element:<Order></Order>,
      loader: cartProductLoader
    },
    {
      path: 'checkout',
      element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
    }
    ,
    {
      path: 'inventory',
      element: <Inventory></Inventory>

    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path:'signup',
      element:<SignUp></SignUp>
    }
   ]
}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>
)
