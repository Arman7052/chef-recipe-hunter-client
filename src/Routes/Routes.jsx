import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Pages/Layouts/Main';

import Blog from '../Pages/Blog';
import Chefs from '../Pages/Chefs/chefs';
import NotFound from '../Pages/NotFound';
import Recipes from '../Pages/Recipes/Recipes';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Error from '../Pages/Error';
import Pithas from '../Pages/ExtraSection/Pithas';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Chefs></Chefs>,
                loader: () => fetch('https://taste-of-bengal-server-arman1e28.vercel.app/chefrecipe')

            },


            {
                path: '/recipes/:id',
                element: <Recipes></Recipes>,
                loader: ({ params }) => fetch(`https://taste-of-bengal-server-arman1e28.vercel.app/chefrecipe/${params.id}`)
            },

            {
                path: '/pithas',
                element: <Pithas></Pithas>,
            },




        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },

    {
        path: "*",
        element: <NotFound></NotFound>
    },

]);


export default router;

