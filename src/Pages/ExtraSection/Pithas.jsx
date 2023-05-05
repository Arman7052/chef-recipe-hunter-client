import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";

const Pithas = () => {

    const [pithasData, setPithasData] = useState([]);

    useEffect(() => {
        fetch('https://taste-of-bengal-server-arman1e28.vercel.app/pithas')
            .then(res => res.json())
            .then(data => setPithasData(data))

    }, [])

    const openModal = () => {
        const modal = document.getElementById("my-modal-6");
        modal.checked = true;
    }

    return (
        <div className=' ml-6 lg:mx-20 text-center pb-10'>
            <p className=' py-4 text-sky-400 text-lg lg:text-3xl lg:py-10 font-semibold'>Delicious Cakes Of Bangladesh</p>
            <div className=' grid grid-cols-2 lg:grid-cols-5   rounded-lg '>
                {
                    pithasData.map(pitha => (
                        <div className=' rounded-lg ' key={pitha.id}>
                            <div className=' text-start font-semibold  rounded-lg '>
                             
                                <img className=' h-40 w-40 p-2' src={pitha.image} alt={pitha.name} onClick={openModal} />
                               <p className=''> <Marquee>{pitha.name}</Marquee></p>
                               
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Pithas;

