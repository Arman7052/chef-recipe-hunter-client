import React, { useContext } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Register = () => {

    const { createUser, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo_url.value;

        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div>
            <Header />
            <div className="flex justify-center items-center h-screen px-8">
                <form onSubmit={handleRegister} className="w-full max-w-md bg-red-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-bold mb-6">Register</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-red-200 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-red-200 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="photo_url">
                            Photo URL
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-red-200 leading-tight focus:outline-none focus:shadow-outline"
                            id="photo_url"
                            type="url"
                            name="photo_url"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-red-200 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Register
                        </button>
                        <p className=' text-center'>Already have account Account? <br /> <Link className=' text-blue-500' to='/login'>Login Here</Link> </p>
                    </div>
                </form>
            </div>
            <div className=' text-center '>
                <p className=''>Register with </p>
                <div className='  flex justify-center gap-3  mt-3 '>

                    <div className=''>
                        <button onClick={signInWithGoogle} className=" btn lg:btn-wide btn-outline btn-error"><span className=' mr-2'><FaGoogle></FaGoogle> </span> Google</button>
                    </div>
                    <div>
                        <button onClick={signInWithGitHub} className="btn lg:btn-wide btn-outline">
                            <span className=' mr-2'><FaGithub></FaGithub></span>GitHub
                        </button>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
