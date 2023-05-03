import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className=' pt-10 '>
            <div className=' text-center bg-red-100 text-red-300 flex sm:justify-center lg:justify-between '>
                <div className='lg:py-8 py-4 lg:text-lg'>
                    <Marquee pauseOnHover={true} speed={30}>
                        Step into Taste Bengal and discover the vibrant tastes of Dhaka. Join us at our table!

                    </Marquee>
                </div>
                <div className=' rounded-full '>
                    <Link to='/'>
                        <img className='lg:h-20  lg:w-40' src="https://i.ibb.co/B4S7mB9/Screenshot-2023-05-02-235921-removebg-preview.png" alt="" />

                    </Link>
                </div>
                <div className='lg:py-8 py-4  lg:text-lg'>
                    <Marquee pauseOnHover={true} speed={30} >
                        Step into Taste Bengal and discover the vibrant tastes of Dhaka. Join us at our table!
                    </Marquee>
                </div>
            </div>
            <Navbar></Navbar>
        </div>

    );
};

export default Header;