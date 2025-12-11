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
                <div className="inline-block relative mb-12">
                    <h2 className="text-3xl font-bold font-roboto inline-block relative z-10 text-black">
                        Meet Our Team
                        <div className="absolute -bottom-1 left-0 w-full h-1/7 bg-purple-600 -z-0 opacity-50"></div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {members.map((m) => (
                        <div key={m.id} className="flex flex-col items-center group">
                            {/* Card Container */}
                            <div className="relative w-64 h-80 perspective-[1000px] group-hover:cursor-pointer">
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
                                <h3 className="text-xl font-bold text-purple-700 font-roboto">{m.name}</h3>
                                <p className="text-sm font-bold text-black font-poppins">{m.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
