import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ChefsCard = ({chef}) => {
   
    const {id,img} = chef;
    

    return (
        <div>
            <div className="card h-96 w-full bg-base-100 shadow-xl image-full">
                <figure><img className=' w-full'  src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/recipes/${id}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefsCard;