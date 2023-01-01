import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Inventory from '../pages/Inventory/Inventory';

const routes =createBrowserRouter([{
    path:'/',
    element: <Main></Main>,
    children:[
        {
        path:'/',
        element:<Home></Home>
    },
        {
        path:'/inventory',
        element:<Inventory></Inventory>
    },

]
}])

export default routes;