import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar text-lime-800 lg:font-normal px-10">
                <div className="flex-1">
                    <Link to="/" className=" text-black font-bold text-2xl">
                        <img className='  h-12 lg:h-16 w-auto ' src="https://i.ibb.co/VqsdBf0/apple-touch-icon.png" alt="" />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-sky-300 bg-transparent">
                        <li>
                            <Link
                                to='/'
                                className={`${
                                    location.pathname === '/' ? 'font-bold' : ''
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/blog'
                                className={`${
                                    location.pathname === '/blog' ? 'font-bold' : ''
                                }`}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about'
                                className={`${
                                    location.pathname === '/about' ? 'font-bold' : ''
                                }`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            {user &&
                                <Link to='/login'>
                                    <img src={user.photo_URL} alt="User Profile" className="h-8 w-8 rounded-full" />
                                </Link>}
                        </li>
                        <li>
                            {user ?
                                <Link onClick={handleLogout} to='/' className={`${
                                    location.pathname === '/' ? 'font-bold' : ''
                                }`}>logout</Link> :
                                <Link to='/login'  className={`${
                                    location.pathname === '/login' ? 'font-bold' : ''
                                }`}> Login</Link>
                            }
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
