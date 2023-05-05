import React from 'react';

const About = () => {
    return (
        <div className="bg-red-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold italic text-red-200">
                        About Taste Bangel
                    </h2>
                    <p className="mt-4 text-l text-indigo-500 text-justify">
                        Taste Bangel is a family-owned and operated restaurant located in the heart of downtown. Our mission is to provide our customers with the best dining experience possible, using only the freshest ingredients and traditional recipes.
                    </p>
                    <div className="mt-10">
                        <h3 className="text-lg font-medium italic text-cyan-600">
                            Our Story
                        </h3>
                        <p className="mt-4 text-m text-indigo-500 text-justify">
                            Taste Bangel was founded in 1995 by the Hasan family, who moved to the United States from Bangladesh in the 1980s. They brought with them a wealth of culinary knowledge and a passion for sharing their culture and cuisine with others.
                        </p>
                        <p className="mt-4 text-m text-indigo-500 text-justify">
                            The restaurant started as a small, hole-in-the-wall establishment that quickly gained a following among locals and foodies alike. Over the years, we've expanded our menu and our space, but we've never lost sight of our roots. We still use the same traditional recipes that the Hasan family brought with them from Bangladesh, and we still prioritize the quality of our ingredients above all else.
                        </p>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-lg font-medium italic text-cyan-600">
                            Our Menu
                        </h3>
                        <p className="mt-4 text-m text-indigo-500 text-justify">
                            At Taste Bangel, we offer a wide range of authentic Bangladeshi dishes, as well as some fusion options that combine the flavors of Bangladesh with other cuisines from around the world. Some of our most popular dishes include:
                        </p>
                        <ul className="mt-4 list-disc list-inside text-m text-indigo-500 text-justify">
                            <li>Chicken tikka masala</li>
                            <li>Lamb vindaloo</li>
                            <li>Chana masala</li>
                            <li>Tandoori chicken</li>
                            <li>Biryani</li>
                            <li>Samosas</li>
                        </ul>
                        <p className="mt-4 text-m text-indigo-500 text-justify">
                            We also have a selection of vegetarian and vegan options, and we can accommodate most dietary restrictions with advance notice.
                        </p>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-lg font-medium italic text-cyan-600">
                            Our Team
                        </h3>
                        <p className="mt-4 text-md text-indigo-500 text-justify">
                            Our team is made up of experienced chefs and servers who are passionate about food and hospitality. We strive to provide our customers with attentive service and a warm, welcoming atmosphere.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
