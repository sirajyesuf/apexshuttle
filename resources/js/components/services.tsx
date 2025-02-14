import React from "react";
import {
    ShieldCheck,
    CalendarCheck,
    Package,
    Gem,
    Plane,
    Building,
} from "lucide-react";

function ServiceFeature({
    icon: Icon,
    title,
    description,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
}) {
    return (
        <div className="p-6 bg-[#1b234c] rounded-lg shadow-md hover:shadow-lg transition-shadow text-white">
            <Icon className="w-12 h-12 text-blue-600 mb-4" color="white" />
            <h3 className="text-xl font-semibold mb-2 capitalize">{title}</h3>
            <p className="text-white">{description}</p>
        </div>
    );
}

export default function Services() {
    const securitySolutions = [
        {
            icon: Plane,
            title: "Airport transfer",
            description: "We provide airport transfer services to our clients.",
        },
        {
            icon: CalendarCheck,
            title: "Roadshow",
            description: "We provide roadshow services to our clients.",
        },
        {
            icon: Gem,
            title: "weddings",
            description: "We provide wedding services to our clients.",
        },
        {
            icon: Building,
            title: "corporate",
            description: "We provide corporate services to our clients.",
        },
        {
            icon: ShieldCheck,
            title: "diplomatic",
            description: "We provide diplomatic services to our clients.",
        },
        {
            icon: Package,
            title: "vip",
            description: "hey",
        },
    ];

    return (
        <section>
            {/* <div className="relative max-w-full mx-auto h-full">
                <div className="flex items-center h-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl relative z-10">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            {title}
                        </h1>
                        <p className="mt-4 text-xl text-blue-100 mb-8">
                            {tdescription}
                        </p>
                    </div>
                </div>
            </div> */}

            {/* Service Features */}
            <section className="py-16 bg-white my-20">
                <div className="container mx-auto px-4 flex flex-col gap-8">
                    <h2 className="text-6xl font-bold text-center mb-12 border-b-8 border-red-900 self-center">
                        OUR SERVICES
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {securitySolutions.map((feature, index) => (
                            <ServiceFeature key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
