import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="w-full px-5 pt-36 pb-16 text-white relative bg-no-repeat bg-bottom bg-cover"
            style={{ backgroundImage: "url('./images/hero-bg.svg')" }}
        >

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 text-center md:text-left z-10">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight font-roboto">
                        Welcome to
                        <br />
                        <span className="text-teal-300 relative inline-flex items-center">
                            Chamaeleo
                            <Image
                                src="/images/logo.svg"
                                width={60}
                                height={60}
                                alt="Logo"
                                className="absolute -top-1 -right-4 w-[1em] h-auto scale-x-[-1]"
                            />
                        </span>
                    </h1>

                    <p className="mt-4 text-lg font-poppins">
                        We build software that evolves as fast as your ideas, adapting to
                        every <b>CHALLENGE</b>, every <b>USER</b>, every <b>VISION</b>.
                    </p>

                    <div className="mt-6 mb-4 flex gap-2 bg-white rounded-lg p-4 w-full max-w-lg mx-auto md:mx-0 shadow-lg">
                        <input
                            placeholder="Enter Your Email..."
                            className="px-4 py-3 rounded-md text-gray-800 w-full border-0 focus:outline-none font-poppins"
                        />
                        <button className="bg-teal-500 px-6 py-3 rounded-md font-semibold w-3xs border border-transparent hover:border-teal-500 hover:bg-white hover:text-teal-500">
                            Book Now
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10 translate-y-12 md:translate-y-20">
                    <div className="relative">
                        <Image
                            src="/images/logo.svg"
                            width={160}
                            height={160}
                            alt="Logo"
                            className="absolute -top-18 left-1/2 -translate-x-1/2 w-40 drop-shadow-lg z-20"
                        />
                        <Image
                            src="/images/laptop.png"
                            width={600}
                            height={600}
                            alt="Laptop"
                            className="drop-shadow-xl max-w-full h-auto relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
