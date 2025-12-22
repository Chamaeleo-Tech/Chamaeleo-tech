import Image from "next/image";

export default function AboutHero() {
    return (
        <section
            className="w-full px-6 md:px-20 pt-40 pb-40 text-white relative bg-no-repeat bg-bottom bg-cover flex flex-col items-center text-center"
            style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
        >
            <div className="max-w-7xl mx-auto z-10">
                <h1 className="text-7xl md:text-6xl font-bold leading-tight font-roboto mb-6">
                    About
                    <span className="text-teal-300 relative inline-flex items-center ml-3">
                        Chamaeleo
                        <Image
                            src="/images/logo.svg"
                            width={60}
                            height={60}
                            alt="Logo"
                            className="absolute top-1 -right-4 w-[0.8em] h-auto scale-x-[-1]"
                        />
                    </span>
                </h1>

                <p className="max-w-4xl mx-auto text-lg md:text-xl font-poppins leading-relaxed opacity-90 font-semibold">
                    Founded by three passionate friends, Chamaeleon was born from a shared
                    love for technology, creativity, and problem-solving. What started as a
                    small idea has grown into a mission to design digital solutions that adapt
                    to every client's needs and evolve with innovation.
                </p>
            </div>
        </section>
    );
}
