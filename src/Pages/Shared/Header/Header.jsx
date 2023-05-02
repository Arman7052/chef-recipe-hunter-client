import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' text-center text-red-200 flex gap-4 justify-between lg:mx-10'>
            <div className='py-10'>
                <Marquee pauseOnHover={true} speed={30}>
                    Step into Taste Bengal and discover the vibrant tastes of Dhaka. Join us at our table!

                </Marquee>
            </div>
            <div className=' bg-red-50 rounded-full'> <Link to='/'><img className=' ' src="https://i.ibb.co/VqsdBf0/apple-touch-icon.png" alt="" />  </Link> </div>
            <div className='py-10'>
                <Marquee pauseOnHover={true} speed={30} >
                    Step into Taste Bengal and discover the vibrant tastes of Dhaka. Join us at our table!
                </Marquee>
            </div>
        </div>
    );
};

export default Header;