import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=' text-center sm:mx-4 lg:mx-10 h-2'>
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <div className="sm:flex-none sm:py-2 lg:row lg:flex gap-4 justify-between">
                        <div className="col-md-4">
                            <h5 className="mb-3">About Us</h5>
                            <p className="text-muted ">
                                Taste Bengal is the premier<br /> restaurant in the city, serving <br />
                                  delicious and authentic Bengali cuisine.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="mb-3 pt-5">Follow Us</h5>
                            <ul className="list-unstyled flex justify-between lg:gap-4  px-20 py-5 lg:4">
                                <li>
                                    <a href="#">
                                        <FaFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5 className="mb-3">Contact Us</h5>
                            <ul className="list-unstyled">
                                <li>123 Main Street, Dhaka</li>
                                <li>Phone: +880 1234567890</li>
                                <li>Email: info@tastebengal.com</li>
                            </ul>

                        </div>


                    </div>
                    <div className="row">
                        <div className="col-12 mt-3 text-center">
                            <p className="text-muted mb-0">
                                &copy; {new Date().getFullYear()} Taste Bengal. All Rights
                                Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;