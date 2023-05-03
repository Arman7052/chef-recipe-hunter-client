import React from 'react';

const RecipesDetails = ({recipe}) => {

    

    return (
        <div className='lg:mx-20 lg:mb-5'>
            <div className="hero min-h-screen bg-red-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold"></h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesDetails;