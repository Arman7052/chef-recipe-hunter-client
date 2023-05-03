import React, { useEffect, useState } from 'react';

const Home = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() =>{

        fetch('http://localhost:7052/chefrecipe')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

    },[])

    return (
        <div className=' mx-20'>
            
        </div>
    );
};

export default Home;