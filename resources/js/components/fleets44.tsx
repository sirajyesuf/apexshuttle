"use client";
import React from "react";

import { useState, useEffect, useRef } from "react";

const items = [
    {
        id: 1,
        name: "Cozy Cabin",
        image: "/placeholder.svg?height=200&width=300",
        maxSeats: 4,
    },
    {
        id: 2,
        name: "Luxury Villa",
        image: "/placeholder.svg?height=200&width=300",
        maxSeats: 8,
    },
    {
        id: 3,
        name: "Beach House",
        image: "/placeholder.svg?height=200&width=300",
        maxSeats: 6,
    },
    {
        id: 4,
        name: "Mountain Retreat",
        image: "/placeholder.svg?height=200&width=300",
        maxSeats: 5,
    },
    {
        id: 5,
        name: "City Apartment",
        image: "/placeholder.svg?height=200&width=300",
        maxSeats: 3,
    },
    {
        id: 6,
        name: "Countryside Cottage",
        image: "/placeholder.svg?height=200&width=300",
        maxSeats: 4,
    },
];

export default function Fleets() {
    const [isScrolling, setIsScrolling] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let startTime: number | null = null;

        const scroll = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (isScrolling) {
                scrollContainer.scrollLeft += 1; // Adjust scroll speed here
                if (
                    scrollContainer.scrollLeft >=
                    scrollContainer.scrollWidth / 2
                ) {
                    scrollContainer.scrollLeft = 0;
                }
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isScrolling]);

    const handleMouseEnter = () => setIsScrolling(false);
    const handleMouseLeave = () => setIsScrolling(true);

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">
                Available Accommodations
            </h1>
            <div
                className="overflow-hidden"
                ref={scrollContainerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="flex space-x-4"
                    style={{ width: `${items.length * 100}%` }}
                >
                    {[...items, ...items].map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="flex-none w-64"
                        >
                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    width={300}
                                    height={200}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">
                                        {item.name}
                                    </h2>
                                    <p className="text-gray-600">
                                        Max Seats:{" "}
                                        <span className="font-bold">
                                            {item.maxSeats}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
