import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    return (
       <div>
         <div className=' text-center bg-red-100 text-red-300 flex sm:justify-center lg:justify-between '>
            <div className='lg:py-8 sm:py-5 lg:text-lg'>
                <Marquee pauseOnHover={true} speed={30}>
                    Step into Taste Bengal and discover the vibrant tastes of Dhaka. Join us at our table!

                </Marquee>
            </div>
            <div className='bg-red-50 rounded-full '> <Link to='/'><img className=' ' src="https://i.ibb.co/VqsdBf0/apple-touch-icon.png" alt="" />  </Link> </div>
            <div className='lg:py-8 sm:py-5  lg:text-lg'>
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