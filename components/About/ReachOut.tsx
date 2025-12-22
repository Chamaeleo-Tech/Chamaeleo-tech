import Image from "next/image";

export default function ReachOut() {
    return (
        <section className="w-full relative flex flex-col items-center">
            <Image
                src="/images/consultant-bg.svg"
                alt="Background"
                fill
                className="object-cover object-top"
                priority
            />
            <div className="px-6 max-w-7xl relative z-10 w-full pt-28 pb-16 flex flex-col sm:flex-row gap-5 items-center text-white">

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Stay up to date with our latest ideas and software
                </h1>

                <div className="mt-6 mb-4 flex gap-2 bg-white rounded-lg p-4 w-full max-w-5xl shadow-lg">
                    <input
                        placeholder="Enter Your Email..."
                        className="px-4 py-3 rounded-md text-gray-800 w-full border-0 focus:outline-none font-poppins"
                    />
                    <button className="bg-purple-700 px-6 py-3 rounded-md font-semibold w-3xs border border-transparent hover:border-purple-800 hover:text-purple-800 hover:bg-white">
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    );
}
