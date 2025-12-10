import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="pt-28 pb-16 text-white relative bg-no-repeat bg-bottom bg-cover"
            style={{ backgroundImage: "url('./images/hero-bg.svg')"}}
        >

            <div className="w-full ml-25 mb-16 flex flex-col sm:flex-row sm:flex-wrap items-center">
                <div className="w-full sm:w-5/12 mr-52 ml-26">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Welcome to
                        <br />
                        <span className="text-teal-300">Chamaeleo</span>
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
            </div>

            <div className="absolute bottom-0 right-0 overflow-hidden">
                <Image
                    src="/images/laptop.png"
                    width={600}
                    height={600}
                    alt="Laptop"
                    className="drop-shadow-xl"
                />
            </div>
        </section>
    );
}
