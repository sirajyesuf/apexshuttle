"use client";

import React, { useState } from "react";
import { Car } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-none relative z-50">
            <div className="max-w-6xl mx-auto px-4 flex justify-between h-20  items-center">
                <div className="">
                    <Car size={60} />
                </div>
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div className="hidden md:flex items-center space-x-1">
                            <a
                                href="/#aboutus_section"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >
                                Aboutus
                            </a>
                            <a
                                href="/#services_section"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >
                                Services
                            </a>
                            <a
                                href="/#contactus_section"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >
                                Contactus
                            </a>

                            <a
                                href="/#fleets_section"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >
                                OurFleet
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="outline-none mobile-menu-button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                className="w-6 h-6 text-gray-500 hover:text-green-500"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
                <a
                    href="/#aboutus_section"
                    className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300 capitalize"
                >
                    Aboutus
                </a>
                <a
                    href="/#services_section"
                    className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300 capitalize"
                >
                    Services
                </a>
                <a
                    href="/#fleets_section"
                    className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300 capitalize"
                >
                    our fleets
                </a>
                <a
                    href="/#contactus_section"
                    className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300 capitalize"
                >
                    Contactus
                </a>
            </div>
        </nav>
    );
}
