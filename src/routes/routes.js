import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Auction from '../component/Auction/Auction';
import Feedback from '../component/Feedback/Feedback';
import Marketplace from '../component/Marketplace/Marketplace';
import Messages from '../component/Messages/Messages';
import Main from '../layout/Main';
import Main2 from '../layout/Main2';
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
        element:<Inventory></Inventory>,
        children:[
            {
                path:'/inventory',
                element: <Main2></Main2>,
                children:[
                    {
                        path:'/inventory/message',
                        element: <Messages></Messages>,
                    },
                    {
                        path:'/inventory/auction',
                        element: <Auction></Auction>,
                    },
                    {
                        path:'/inventory/feedback',
                        element: <Feedback></Feedback>,
                    },
                ]
            }

        ]
    },

]
}])

export default routes;