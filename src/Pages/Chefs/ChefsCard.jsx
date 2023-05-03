import React from 'react';
import { Link} from 'react-router-dom';

const ChefsCard = ({chef}) => {
   
    const {id,img,name,years_of_experience, num_recipes, likes} = chef;
    

    return (
        <div>
            <div className="card h-96 w-full bg-base-100 shadow-xl image-full">
                <figure><img className=' w-full'  src={img} alt="Shoes" /></figure>
                <div className="card-body py-5 text-start">
                    <h2 className="card-title font-bold text-indigo-300">{name}</h2>
                    <p className=' text-indigo-300 font-semibold'>Year of Experience : {years_of_experience}</p>
                    <p className=' text-indigo-300 font-semibold'>Number of Recipe : {num_recipes}</p>
                    <p className=' text-indigo-300 font-semibold'>Likes :{likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/recipes/${id}`}><button className="btn btn-primary">View Recipe</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefsCard;