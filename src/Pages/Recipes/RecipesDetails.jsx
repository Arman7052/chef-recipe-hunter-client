import React from 'react';

const RecipesDetails = ({ recipe }) => {

    const { photo_url, recipe_name, ingredients, instructions, likes } = recipe;


    return (
        <div className=' mx-5 mb-5 lg:mx-20 lg:mb-5'>
          
            <div className="card w-auto glass text-sky-600">
                <figure><img className='w-full' src={photo_url} alt="car!" /></figure>
                <div className=' p-2'>
                <h2 className="card-title">{recipe_name}</h2>
                <p><span className=' text-lg font-bold text-stone-950 px-1'>Ingredients :</span>{ingredients}</p>
                <p><span className=' text-lg font-bold text-stone-950 px-1'>Instructions : </span>{instructions}</p>
                <p><span className=' text-lg font-bold text-stone-950 px-1'>Liked:</span>{likes}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn bg-transparent border-none hover:bg-red-400 text-black m-2">Favourite</button>
                </div>
            </div>
        </div>
        
    );
};

export default RecipesDetails;