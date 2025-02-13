import React from "react";
import { Car, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <div className="bg-[#1b234c] flex flex-col gap-8 text-white p-4">
            <div className="container mx-auto  p-4 h-[90%] grid grid-cols-1 md:grid-cols-2">
                <div className="w-50 h-50">
                    <Car size={60} />
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="text-xl font-bold">Company</div>
                        <p>Address</p>
                        <p>Phone</p>
                        <p>Email</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-xl font-bold">Services</div>
                        <p>Service1</p>
                        <p>Service2</p>
                        <p>Service3</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-xl font-bold">Follow us</div>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto border-yellow-900 flex flex-row justify-between items-center">
                <div className="text-white font-bold font-lg flex flex-col md:flex-row gap-4">
                    © 2025 ApexShuttle
                    <span className="text-[#f83fe0]">
                        Powered by Santa Trading PLC.
                    </span>
                </div>

                <div className="flex gap-4">
                    <a href="#" color="white">
                        <Linkedin size={30} />
                    </a>
                    <a href="#" color="white">
                        <Instagram size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
}
