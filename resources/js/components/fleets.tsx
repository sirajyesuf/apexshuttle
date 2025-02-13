"use client";

import { useState } from "react";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import path from "path";
import { repeat } from "lodash";

export default function Fleets() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });
    const controls = useAnimation();
    const fleets = [
        {
            name: "Cozy Cabin",
            path: "/images/car-1.png",
            seats: 4,
        },
        {
            name: "Luxury Villa",
            path: "/images/car-2.png",
            seats: 8,
        },
        // {
        //     name: "Beach House",
        //     path: "/images/car-3.png",
        //     seats: 6,
        // },
        {
            name: "Mountain Retreat",
            path: "/images/car-4.png",
            seats: 5,
        },
        {
            name: "City Apartment",
            path: "/images/car-5.png",
            seats: 3,
        },
        {
            name: "Countryside Cottage",
            path: "/images/car-6.png",
            seats: 4,
        },
        {
            name: "City Apartment",
            path: "/images/car-7.png",
            seats: 4,
        },
        {
            name: "Countryside Cottage",
            path: "/images/car-8.png",
            seats: 4,
        },
        {
            name: "City Apartment",
            path: "/images/car-9.png",
            seats: 4,
        },
        {
            name: "Countryside Cottage",
            path: "/images/car-10.png",
            seats: 4,
        },
        {
            name: "City Apartment",
            path: "/images/car-11.png",
            seats: 4,
        },
        {
            name: "Countryside Cottage",
            path: "/images/car-12.png",
            seats: 4,
        },
        {
            name: "City Apartment",
            path: "/images/car-13.png",
            seats: 4,
        },
        {
            name: "Countryside Cottage",
            path: "/images/car-14.png",
            seats: 4,
        },
    ];

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;

        if (isInView) {
            controls.start("visible");
            intervalId = setInterval(() => {
                if (containerRef.current) {
                    containerRef.current.scrollLeft += 1;
                    if (
                        containerRef.current.scrollLeft >=
                        (containerRef.current.scrollWidth -
                            containerRef.current.clientWidth) /
                            2
                    ) {
                        containerRef.current.scrollLeft = 0;
                    }
                }
            }, 20);
        } else {
            controls.stop();
        }

        return () => {
            if (intervalId !== undefined) {
                clearInterval(intervalId);
            }
        };
    }, [isInView, controls]);

    return (
        <div className="bg-gray-100 py-16 overflow-hidden" id="client_section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
                    Our fleeet
                </h2>
                <div
                    ref={containerRef}
                    className="relative overflow-hidden"
                    style={{ height: "300px" }}
                >
                    <motion.div
                        className="flex space-x-8 absolute h-[800px]"
                        animate={controls}
                        initial="hidden"
                        variants={{
                            visible: {
                                x: [0, -1920],
                                transition: {
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 50,
                                        ease: "linear",
                                    },
                                },
                            },
                        }}
                    >
                        {fleets.map((client, index) => (
                            <div
                                className="bg-[#991b1b] flex flex-col p-4 rounded-lg shadow-lg"
                                key={index}
                            >
                                <div
                                    className="flex-shrink-0 h-[200px] w-[600px]  rounded-none shadow-none flex items-center justify-center p-4  transition-shadow duration-300 ease-in-out"
                                    onMouseEnter={() => controls.stop()}
                                    onMouseLeave={() =>
                                        controls.start("visible")
                                    }
                                    style={{
                                        backgroundImage: `url(${client.path})`,
                                        backgroundSize: "contain",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                ></div>
                                <div className="flex flex-col items-center justify-center p-4 text-white">
                                    <h1>{client.name}</h1>
                                    <p> max number of seats{client.seats}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
