import Image from "next/image";

export default function Team() {
    const members = [{
        id: 1,
        name: "Bakir Naim",
        position: "Full Stack Developer",
        image: "/images/team1.png"
    }, {
        id: 2,
        name: "Hanin Abbas",
        position: "UX/UI Designer",
        image: "/images/team1.png"
    }, {
        id: 3,
        name: "Asmaa Mouzannar",
        position: "Frontend Developer",
        image: "/images/team1.png"
    }];

    return (
        <section className="w-full py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="mb-12 text-3xl font-bold font-roboto inline-block relative z-10 text-black underline decoration-secondary decoration-4 underline-offset-8">
                    Meet Our Team
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {members.map((m) => (
                        <div key={m.id} className="flex flex-col items-center group">
                            {/* Card Container */}
                            <div className="relative w-full max-w-[16rem] h-80 perspective-[1000px] group-hover:cursor-pointer">
                                {/* Twist/Rotate Effect Wrapper */}
                                <div className="w-full h-full relative transition-transform duration-700 ease-in-out transform group-hover:[transform:rotateY(180deg)] bg-gray-300 rounded-lg overflow-hidden shadow-xl">
                                    {/* Placeholder for Team Image - using a gray block or generic if no image available */}
                                    {/* Since I don't have the specific team photos, I'll use a placeholder div or reuse illustration */}
                                    <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-200">
                                        <span className="text-4xl font-bold">Photo</span>
                                    </div>
                                    {/* If we had the image:
                                     <Image src="/images/team1.png" fill className="object-cover" alt="Hanin Abbas" />
                                     */}
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="text-2xl font-bold text-secondary font-roboto">{m.name}</h3>
                                <p className="text-lg font-semibold group-hover:font-bold group-hover:underline group-hover:decoration-dotted group-hover:decoration-black group-hover:decoration-1 text-black font-poppins">{m.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
