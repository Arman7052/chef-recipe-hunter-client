import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipesDetails from './RecipesDetails';

const Recipes = () => {
    const chefRecipe = useLoaderData();
    const { img, name, description, years_of_experience,num_recipes ,likes} = chefRecipe;
    const recipeData = chefRecipe.recipes;
    // console.log(chefRecipe);
    return (
        <div className=''>
            <div className=' mx-5 lg:mx-20 '>
                <div className="hero min-h-screen py-5 bg-red-200 rounded-t-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img} className=" h-40 w-40 lg:h-80 lg:w-80 rounded-full shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className=" text-indigo-500 py-2">{description}</p>
                            <p className=" text-indigo-500 py-2">Experience :{years_of_experience}</p>
                            <p className=" text-indigo-500 py-2">Number of Recipes : {num_recipes}</p>
                            <p className=" text-indigo-500 py-2">Liked by :{likes} people</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-red-200 mx-5 lg:mx-20'>
            <div className=' grid lg:grid-cols-3 gap-1'>
            {
                recipeData.map(recipe => <RecipesDetails
                    key={recipe._id}
                    recipe={recipe}
                ></RecipesDetails>
                
                )
            }
            </div>
            </div>
        </div>
    );
};

export default Recipes;