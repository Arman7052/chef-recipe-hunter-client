import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar text-lime-800 lg:font-bold px-10">
                <div className="flex-1">
                    <Link to="/" className=" text-black font-bold text-2xl">
                        <img className='  h-12 lg:h-16 w-auto ' src="https://i.ibb.co/VqsdBf0/apple-touch-icon.png" alt="" />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-sky-300 bg-transparent">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li>
                            {user &&
                                <Link to='/login'><FaRegUserCircle />{user.displayName}
                                </Link>}
                        </li>
                        <li>
                            {user ?
                                <Link onClick={handleLogout} to='/'>logout</Link> :
                                <Link to='/login'>login</Link>
                            }
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Navbar;