import React from "react";
import { Car, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <section
            className="bg-[#1b234c] flex flex-col gap-8 text-white p-4 shadow-none rounded-t-lg"
            id="footer_section"
        >
            <div className="container mx-auto  p-4 h-[90%] grid grid-cols-1 md:grid-cols-2">
                <div className="w-50 h-50">
                    <Car size={60} />
                </div>

                <div className="grid  grid-cols-1 md:grid-cols-3 gap-4">
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
                <div className="text-white text-start">
                    © 2025 ApexShuttle. All Rights Reserved.
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
            <div className="text-[#f83fe0] font-bold  text-center">
                Powered by Santa Trading PLC.
            </div>
        </section>
    );
}
