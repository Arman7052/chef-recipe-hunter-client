import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipesDetails = ({ recipe }) => {

    const { photo_url, recipe_name, ingredients, instructions, likes } = recipe;
    const [isFevourute, setIsFevourute] = useState(false);

    const handleFevouruteClick = () => {
        setIsFevourute(true);
        toast("Added to Fevourute", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div className=' mx-5 mb-5 lg:mx-20 lg:mb-5'>

            <div className="card h-auto w-auto glass text-sky-600">
                <figure><img className='w-full' src={photo_url} alt="car!" /></figure>
                <div className=' h-72 p-2'>
                    <h2 className="card-title"><Marquee speed={50}> {recipe_name}</Marquee></h2>
                    <p><span className=' text-lg font-bold text-stone-950 px-1'>Ingredients :</span><Marquee speed={10}> {ingredients}</Marquee></p>
                    <p><span className=' text-lg font-bold text-stone-950 px-1'>Instructions : </span>{instructions}</p>
                    <p><span className=' text-lg font-bold text-stone-950 px-1'>Liked:</span>{likes}</p>
                </div>
                <div className="card-actions justify-end">

                    <button onClick={handleFevouruteClick} disabled={isFevourute} className="btn bg-transparent border-none hover:bg-red-400 text-black m-2">Fevourute</button>
                    

                </div>
                <ToastContainer />
            </div>
        </div>

    );
};

export default RecipesDetails;
