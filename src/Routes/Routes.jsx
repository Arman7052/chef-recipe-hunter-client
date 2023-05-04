import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Pages/Layouts/Main';

import Blog from '../Pages/Blog';
import Chefs from '../Pages/Chefs/chefs';
import NotFound from '../Pages/NotFound';
import Recipes from '../Pages/Recipes/Recipes';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        
        children: [
            {
                path: '/',
                element:<Chefs></Chefs> ,
                loader: () => fetch('https://taste-of-bengal-server-arman1e28.vercel.app/chefrecipe')
                
            },
            
            {
                path: '/blog',
                element: <Blog></Blog>
            },
           
            {
                path:'/recipes/:id',
                element: <Recipes></Recipes>,
                loader: ({params}) => fetch(`https://taste-of-bengal-server-arman1e28.vercel.app/chefrecipe/${params.id}`)
            },

            {
                path:"*",
                element: <NotFound></NotFound>
              },
            
        ]
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element: <Register></Register>
    }
]);


export default router;

