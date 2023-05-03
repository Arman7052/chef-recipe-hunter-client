import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefsCard from './ChefsCard';

const Chefs = () => {
   
    const chefsDetails = useLoaderData();
    console.log(chefsDetails);

    return (
        <div className=' mx-5 lg:mx-20  text-center italic py-10'>
            <h1 className='py-10  font-bold text-2xl text-indigo-700'>Meet our Chefs</h1>

            <div className='grid lg:grid-cols-3 gap-3'>
                {
                    chefsDetails.map((chef) => <ChefsCard
                        key={chef.id}
                        chef={chef}
                    ></ChefsCard>)
                }
            </div>

        </div>
    );
};

export default Chefs;