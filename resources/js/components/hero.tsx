import React from "react";

export default function Hero() {
    return (
        <div className="relative  h-[30vh] md:h-[85vh] flex items-center justify-center p-2">
            {/* Background Image */}
            <img
                src="/images/car-3.png"
                alt="Mountain landscape"
                className="absolute inset-0 w-full h-full object-fill md:object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-20 text-center text-white self-start">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Explore the World
                </h1>
                <p className="text-md sm:text-xl md:text-2xl  mb-8">
                    Discover breathtaking landscapes with us
                </p>
                <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
                    Start Your Journey
                </button>
            </div>
        </div>
    );
}
