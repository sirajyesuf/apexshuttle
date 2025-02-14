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
                                href="/"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >
                                About
                            </a>
                            <a
                                href="/services"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >
                                Services
                            </a>
                            <a
                                href="/contact"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >
                                Contact
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
                    href="/"
                    className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300"
                >
                    Home
                </a>
                <a
                    href="/about"
                    className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300"
                >
                    About
                </a>
                <a
                    href="/services"
                    className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300"
                >
                    Services
                </a>
                <a
                    href="/contact"
                    className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300"
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}
