import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Pages/Layouts/Main';

import Blog from '../Pages/Blog';
import Chefs from '../Pages/Chefs/chefs';
import ChefsCard from '../Pages/Chefs/ChefsCard';
import NotFound from '../Pages/NotFound';
import Recipes from '../Pages/Recipes/Recipes';
import Error from '../Pages/Error';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element:<Chefs></Chefs> ,
                loader: () => fetch('http://localhost:5000/chefrecipe')
                
            },
            
            {
                path: '/blog',
                element: <Blog></Blog>
            },
           
            {
                path:'/recipes/:id',
                element: <Recipes></Recipes>,
                loader: ({params}) => fetch(`http://localhost:5000/chefrecipe/${params.id}`)
            },

            {
                path:"*",
                element: <NotFound></NotFound>
              },
            
        ]
    }
]);


export default router;

