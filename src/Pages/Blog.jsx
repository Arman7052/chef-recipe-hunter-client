import React from 'react';

const Blog = () => {
    return (
        <div className=' text-center bg-red-50'>
            <h1 className=' font-bold text-3xl py-10  bg-red-100 text-indigo-300'>Blog</h1>
            <div className='px-20 py-10 pb-20 bg-red-100'>

                <div className='border-2 py-2 my-4 bg-violet-300	rounded-md'>
                    <h1 className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'> The differences between uncontrolled and controlled components.</h1>
                    <p className='bg-gray-50	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>Uncontrolled components refer to parts of a system that function autonomously and are not under the system's direct management. Controlled components, on the other hand, are governed and directed by the system. Uncontrolled components operate without predictability or control, whereas controlled components can be configured to perform specific tasks within the system.</p>
                </div>
                <div className='border-2 py-2 my-4 bg-blue-300	rounded-md'>
                    <h1 className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>How to validate React props using PropTypes ? </h1>
                    <p className='bg-gray-50	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>To validate React props using PropTypes, import the PropTypes module and add a propTypes property to your component. Define the prop types as an object, with each key representing a prop name and its value being a validator function. Validators include types such as string, number, and bool, as well as custom functions.</p>
                </div>
                <div className='border-2 py-2 my-4 bg-violet-300	rounded-md'>
                    <h1 className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>Tell us the difference between nodejs and express js.</h1>
                    <p className='bg-gray-50	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server side. Express.js is a web application framework built on top of Node.js, providing additional functionality for building web applications, such as routing and middleware support. Express.js can be thought of as a tool that simplifies building web applications with Node.js.</p>
                </div>
                <div className='border-2 py-2 my-4 bg-blue-300	rounded-md'>
                    <h1 className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='bg-gray-50	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>A custom hook is a reusable function in React that allows you to extract common code from components into a separate function, simplifying logic, and making it more reusable, composable, testable, and maintainable.</p>
                </div>
            </div>
        </div>
    );

};

export default Blog;