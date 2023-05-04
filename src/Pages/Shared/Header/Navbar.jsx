import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
const Navbar = () => {

    return (
        <div className="navbar text-lime-800 lg:font-bold px-10">
            <div className="flex-1">
                <Link to="/" className=" text-black font-bold text-2xl">
                <img className='  h-12 lg:h-16 w-auto ' src="https://i.ibb.co/VqsdBf0/apple-touch-icon.png" alt="" />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal text-sky-300">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/login'><FaRegUserCircle/></Link></li>
                    <li><Link to='/signUp'>Sign Up</Link></li>
                   
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
