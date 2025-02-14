export default function AboutUs() {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/aboutus-car.png')" }}
            id="aboutus_section"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full flex items-start justify-start p-4 sm:p-6 md:p-8">
                <div className="w-full md:max-w-[50%] lg:max-w-[50%] text-white overflow-y-auto max-h-full space-y-4">
                    <h1 className="font-extrabold text-xl md:text-4xl border-b-8 border-red-900 self-start">
                        ABOUT US
                    </h1>
                    <p className="text-lg  md:text-xl">
                        In 2008, Apexshuttle expanded its corporate mission and
                        engaged in transportation services. Our transportation
                        mission is to provide safe, dependable, and efficient
                        services for people who need stress-free and economical
                        travel. We have well-trained, experienced, fully
                        insured, professional, and courteous drivers. Our
                        vehicles include Cadillacs, Mercedes Benz, Tesla, Range
                        Rovers, Sprinters, and coach buses that are spread
                        throughout the DMV and can be deployed immediately. Our
                        automobiles are well-maintained, and our staff is always
                        punctual. We provide services to a significant downtown
                        corridor in Washington, DC, Washington Dulles
                        International, and Ronald Reagan National Airports.
                    </p>
                </div>
            </div>
        </div>
    );
}
