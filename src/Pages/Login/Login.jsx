import React, { useContext, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const { signIn, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const signIn = result.user;
                console.log(signIn);
            })
            .catch(error => {
                setErrorMessage(error.message);
                console.log(error);
            })

    }
    return (
        <div>
            <Header />
            <div className="flex justify-center items-center">
                <form onSubmit={handleSignIn} className="w-full max-w-md bg-red-200 shadow-md rounded px-8 pt-6 pb-4 mb-4">
                    <h2 className="text-xl font-bold mb-6">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow text-orange-300 appearance-none border rounded w-full py-2 px-3 bg-indigo-500 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            required
                        />


                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow text-orange-300 appearance-none border rounded w-full py-2 px-3  bg-indigo-500  leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            required
                        />
                        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

                    </div>
                    <div className="flex items-center gap-2 justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                        <p className=' text-center'>Don't have Account? <br /> <Link className=' text-blue-500' to='/register'>Register Here</Link> </p>
                    </div>

                </form>

            </div>

            <div className=' text-center pb-20'>
                <p className=' pb-2'>Login with </p>
                <div className='  flex justify-center gap-3'>

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
            <Footer ></Footer>
        </div>
    );
};

export default Login;




