import { MoveRight } from "lucide-react";
export default function ContactUs() {
    return (
        <section className="h-[70vh] md:h-[60vh] bg-white text-white grid grid-cols-1 md:grid-cols-2 shadow-sm rounded-lg  container mx-auto my-12 border-[1px] border-[#e9e9e9]">
            <div className="">
                <div className="text-center text-5xl font-extrabold py-8 text-[#991b1b]">
                    Contact Us
                </div>
                <div className="flex justify-center p-8">
                    <form className="w-full">
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border-2 rounded-md border-[#d5d4d4] border-gray-500 p-4"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border-2 rounded-md border-[#d5d4d4] p-4"
                            />
                            <textarea
                                rows={10}
                                placeholder="Message"
                                className="border-2 rounded-md border-[#d5d4d4] p-2"
                            ></textarea>
                            <div className="flex rounded-md bg-[#991b1b] items-center justify-center self-start px-4">
                                <button className="text-white px-8 py-4 font-xl capitalized rounded-md font-bold">
                                    Submit
                                </button>
                                <MoveRight color="white" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5784293198455!2d38.7963!3d9.0235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMjQuNiJOIDM4wrA0Nyc0Ni43IkU!5e0!3m2!1sen!2set!4v1635000000000!5m2!1sen!2set"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                />
            </div>
        </section>
    );
}
