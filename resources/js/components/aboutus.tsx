export default function AboutUs() {
    return (
        <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center">
            <img
                src={"/images/aboutus-car.png"}
                alt=""
                className="w-full h-full object-cover"
            />

            <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-4  w-[100%] md:max-w-[40%] flex flex-col gap-4 h-full">
                <h1 className="font-extrabold text-xl md:text-4xl border-b-8 border-red-900 self-start">
                    About ApexShuttle
                </h1>

                <p className="text-md md:text-lg montserrat">
                    In 2008, USP Holdings expanded its corporate mission and
                    engaged in transportation services. Our transportation
                    mission is to provide safe, dependable, and efficient
                    services for people who need stress-free and economical
                    travel. We have well-trained, experienced, fully insured,
                    professional, and courteous drivers. Our vehicles include
                    Cadillacs, Mercedes Benz, Tesla, Range Rovers, Sprinters,
                    and coach buses that are spread throughout the DMV and can
                    be deployed immediately. Our automobiles are
                    well-maintained, and our staff is always punctual. We
                    provide services to a significant downtown corridor in
                    Washington, DC, Washington Dulles International, and Ronald
                    Reagan National Airports.
                </p>
            </div>
        </section>
    );
}
