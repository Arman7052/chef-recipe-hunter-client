import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const StreetFood = () => {
    const [streetFood, setStreetFood] = useState([]);

    useEffect(() => {
        fetch('https://taste-of-bengal-server-arman1e28.vercel.app/streetfood')
            .then(res => res.json())
            .then(data => setStreetFood(data))

    }, [])


    return (
        <div className=' ml-6 lg:mx-20 text-center pb-10 my-10'>
            <p className=' py-4 text-sky-400 text-lg lg:text-3xl lg:py-10 font-semibold'>Street food Of Bangladesh</p>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-3  rounded-lg '>
                {
                    streetFood.map(street => (
                        <div className=' rounded-lg ' key={street.id}>
                            <div className=' text-start font-semibold  rounded-lg '>

                               
                               
                                <div className="card card-compact shadow-xl">
                                    <figure className=''><img className='pt-2' src={street.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title"> <Marquee >{street.name}</Marquee></h2>
                                        <p>{street.instructions}</p>
                                       
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default StreetFood;