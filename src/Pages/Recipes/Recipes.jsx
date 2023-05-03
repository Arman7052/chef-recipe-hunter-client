import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipesDetails from './RecipesDetails';

const Recipes = () => {
    const chefRecipe = useLoaderData();
    const { img, name } = chefRecipe;
    const recipeData = chefRecipe.recipes;
    console.log(chefRecipe);
    return (
        <div>
            <div className=' sm:mx-5 lg:mx-20 '>
                <div className="hero min-h-screen py-10 bg-red-200 rounded-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img} className=" h-40 w-40 lg:h-80 lg:w-80 rounded-full shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            {
                recipeData.map(recipe => <RecipesDetails
                    key={recipe._id}
                    recipe={recipe}
                ></RecipesDetails>)
            }
            </div>
        </div>
    );
};

export default Recipes;