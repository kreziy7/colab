import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="">
            <div className='flex justify-end gap-[10%] pr-[16%] my-[30px]'>
                    <Link to="/Home" >
                        <img src="public/image 5.png" alt="" />
                    </Link>

                    <div className='flex flex-col items-center justify-around '>
                        <div>
                            <select name="" id="">
                                <option value="RU">RU</option>
                                <option value="UZ">UZ</option>
                                <option value="EN">EN</option>
                            </select>
                            <span>+998 94 606 60 60</span>
                        </div> 
                        

                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors duration-200 font-medium uppercase text-sm">
                            ОСТАВИТЬ ЗАЯВКУ
                        </button>
                    </div>

                    


                </div>

                <hr />
            <div className="container max-w-[1240px] mx-auto px-5">
                
                
                <div className="flex flex-col py-4">
                    {/* Logo */}


                    {/* Navigation */}
                    <nav className="">
                        <ul className="flex justify-between items-center">
                            <li>
                                <Link
                                    to="/brand"
                                    className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium uppercase text-sm"
                                >
                                    О БРЕНДЕ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/third"
                                    className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium uppercase text-sm"
                                >
                                    ПРЕИМУЩЕСТВА
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Club"
                                    className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium uppercase text-sm"
                                >
                                    ОТКРЫТЬ КЛУБ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium uppercase text-sm"
                                >
                                    КОНТАКТЫ
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Right side elements */}
                    <div className="flex items-center space-x-4">
                        {/* Phone number */}


                        {/* CTA Button */}


                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-700 hover:text-blue-500"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4">
                        <nav>
                            <ul className="flex flex-col space-y-2">
                                <li>
                                    <Link
                                        to="/brand"
                                        className="block text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium uppercase text-sm py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        О БРЕНДЕ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products"
                                        className="block text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium uppercase text-sm py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        ПРОДУКЦИИ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/advantages"
                                        className="block text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium uppercase text-sm py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        ПРЕИМУЩЕСТВА
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/club"
                                        className="block text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium uppercase text-sm py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        ОТКРЫТЬ КЛУБ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contacts"
                                        className="block text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium uppercase text-sm py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        КОНТАКТЫ
                                    </Link>
                                </li>
                            </ul>
                        </nav>



                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;