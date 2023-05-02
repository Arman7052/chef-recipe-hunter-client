import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar text-black ">
            <div className="flex-1">
                <Link to="/" className=" text-black font-bold text-2xl">
                    <img className=' h-10 w-auto' src="https://i.ibb.co/B4S7mB9/Screenshot-2023-05-02-235921-removebg-preview.png" alt="" />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signUp'>Sign Up</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
