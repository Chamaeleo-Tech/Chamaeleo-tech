import Image from "next/image";

export default function Hero() {
    return (
        <section className="pt-28 pb-16 bg-purple-600 text-white relative">

            <div className="w-full flex flex-col sm:flex-row sm:flex-wrap items-center">
                <div className="w-full sm:w-5/12 mr-52 ml-26">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Welcome to <span className="text-teal-300">Chamaeleo</span>
                    </h1>

                    <p className="mt-4 text-lg">
                        We build software that evolves as fast as your ideas, adapting to
                        every <b>challenge</b>, every <b>user</b>, every <b>vision</b>.
                    </p>

                    <div className="mt-6 mb-4 flex gap-2 bg-white rounded-lg p-4 lg:w-3xl md:w-2xl sm:w-full">
                        <input
                            placeholder="Enter Your Email..."
                            className="px-4 py-3 rounded-md text-gray-800 w-full border-0 focus:outline-none"
                        />
                        <button className="bg-teal-400 px-6 py-3 rounded-md font-semibold w-3xs">
                            Book Now
                        </button>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Image
                        src="/images/laptop.png"
                        width={500}
                        height={500}
                        alt="Laptop"
                        className="drop-shadow-xl"
                    />
                </div>
            </div>

            {/* Curve shape */}
            <div className="absolute bottom-0 w-full overflow-hidden rotate-180">
                <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-16">
                    <path d="M0,0 C150,80 350,0 500,80 L500,0 L0,0 Z" fill="#f3f4f6"></path>
                </svg>
            </div>
        </section>
    );
}
