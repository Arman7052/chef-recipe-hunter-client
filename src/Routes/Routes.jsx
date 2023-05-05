import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';


import Blog from '../Pages/Blog';
import Chefs from '../Pages/Chefs/chefs';
import NotFound from '../Pages/NotFound';
import Recipes from '../Pages/Recipes/Recipes';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Error from '../Pages/Error';
import Pithas from '../Pages/ExtraSection/Pithas';
import About from '../Pages/About';


const Main = React.lazy(() => import('../Pages/Layouts/Main'))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback= {<p className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen text-center font-bold text-9xl'>Please wait....</p>}> <Main></Main></Suspense>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Chefs></Chefs>,
                loader: () => fetch('https://taste-of-bengal-server-arman1e28.vercel.app/chefrecipe')

            },


            {
                path: '/recipes/:id',
                element:  <Recipes></Recipes>,
                loader: ({ params }) => fetch(`https://taste-of-bengal-server-arman1e28.vercel.app/chefrecipe/${params.id}`)
            },

            {
                path: '/pithas',
                element: <Pithas></Pithas>,
            },


            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            }
        

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
        path: "*",
        element: <NotFound></NotFound>
    },

]);


export default router;

