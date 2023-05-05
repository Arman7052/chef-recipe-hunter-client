import ChefsCard from './ChefsCard';
import Marquee from "react-fast-marquee";
import { useLoaderData } from 'react-router-dom';
import Pithas from '../ExtraSection/Pithas';
import StreetFood from '../ExtraSection/StreetFood';


const Chefs = () => {
    const chefDetails = useLoaderData();




    return (
        <div>


            <div>
                <div className="carousel h-96 w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/dBNzHc3/banner-2.jpg" className="w-full" />

                        <div className="absolute lg:flex  top-0 left-0 right-0 text-white text-center align-middle px-4 bg-black bg-opacity-50">

                            <div> <img className=' h-60 lg:h-auto w-auto' src="https://i.ibb.co/S75fHBb/we-are.png" alt="" /></div>

                            <div><Marquee><h1 className="text-3xl text-orange-600  font-semibold italic py-14 lg:py-44">
                                Welcome to Taste Bengal, the ultimate destination for experiencing the rich and diverse cuisine of Bengal  .
                            </h1></Marquee>
                            </div></div>
                    </div>
                </div>
            </div>
            <Pithas></Pithas>
            <div className=' mx-5 lg:mx-20  text-center italic py-2'>
                <h1 className='py-5  font-bold text-2xl text-indigo-700'>Meet our Chefs</h1>

                <div className='grid lg:grid-cols-3 gap-3'>
                    {
                        chefDetails.map((chef) => <ChefsCard
                            key={chef.id}
                            chef={chef}
                        ></ChefsCard>)
                    }
                </div>

            </div>
            <StreetFood></StreetFood>
        </div>
    );
};

export default Chefs;