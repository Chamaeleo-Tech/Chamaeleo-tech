import Image from "next/image";
import { Globe } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Web Design & Development",
            description: "We craft modern, responsive websites that combine clean design with powerful functionality — turning visitors into loyal customers."
        },
        {
            title: "Web Design & Development",
            description: "We craft modern, responsive websites that combine clean design with powerful functionality — turning visitors into loyal customers."
        },
        {
            title: "Web Design & Development",
            description: "We craft modern, responsive websites that combine clean design with powerful functionality — turning visitors into loyal customers."
        },
        {
            title: "Web Design & Development",
            description: "We craft modern, responsive websites that combine clean design with powerful functionality — turning visitors into loyal customers."
        },
        {
            title: "Web Design & Development",
            description: "We craft modern, responsive websites that combine clean design with powerful functionality — turning visitors into loyal customers."
        },
    ];

    // Split services into top (3) and bottom (2)
    const topRow = services.slice(0, 3);
    const bottomRow = services.slice(3, 5);

    const Card = ({ item }: { item: { title: string; description: string } }) => (
        <div className="group relative bg-white border border-teal-400 rounded-xl p-8 shadow-sm hover:shadow-md transition overflow-hidden min-h-[250px] flex flex-col justify-center">
            {/* Hover Animation Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 opacity-10 transition-all duration-700 ease-in-out group-hover:top-6 group-hover:left-[93%] group-hover:w-20 group-hover:opacity-100 group-hover:scale-x-[-1] z-0 pointer-events-none">
                <Image
                    src="/images/logo.png"
                    width={160}
                    height={160}
                    alt="Logo watermark"
                    className="w-full h-auto"
                />
            </div>

            <div className="relative z-10">
                <Globe className="text-teal-500 mb-4" size={32} />
                <h3 className="text-xl font-bold font-roboto mb-3 text-black">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-poppins">
                    {item.description}
                </p>
            </div>
        </div>
    );

    return (
        <section id="services" className="w-full bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="inline-block relative mb-4">
                    <h2 className="text-4xl font-bold text-black font-roboto z-10 relative">Services</h2>
                    <div className="absolute -bottom-1 left-0 w-full h-1/7 bg-purple-600 -z-0 opacity-50"></div>
                </div>

                <p className="text-gray-600 mt-4 max-w-3xl mx-auto font-poppins mb-12">
                    Our services are built to evolve with you, flexible, scalable, and designed to meet every stage of your digital journey.
                </p>

                {/* Top Row: 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {topRow.map((s, i) => (
                        <Card key={i} item={s} />
                    ))}
                </div>

                {/* Bottom Row: 2 Columns (Centered) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {bottomRow.map((s, i) => (
                        <Card key={i} item={s} />
                    ))}
                </div>
            </div>
        </section>
    );
}
