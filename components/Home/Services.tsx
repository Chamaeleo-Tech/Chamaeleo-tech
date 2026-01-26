import Image from "next/image";
import { Globe, PenTool, SquareTerminal, Rocket, Wrench } from "lucide-react";

export default function Services() {
    // Custom Icon for Maintenance to match "Wrench in a circle" request
    const WrenchInCircle = (props: any) => (
        <div
            className={`${props.className} border-2 border-primary group-hover:border-secondary rounded-full flex items-center justify-center transition-colors duration-300`}
            style={{ width: props.size || 32, height: props.size || 32, padding: 6 }}
        >
            <Wrench size="100%" />
        </div>
    );

    const services = [
        {
            icon: Globe,
            title: "Web Design & Development",
            description: "We craft modern, responsive websites that combine clean design with powerful functionality — turning visitors into loyal customers."
        },
        {
            icon: PenTool,
            title: "UX/UI Strategy & Product Design",
            description: "We help shape your product before it’s built. From understanding users to defining flows and features, we design experiences that solve real problems and support long-term growth."
        },
        {
            icon: SquareTerminal,
            title: "Custom Software Development",
            description: "We design and develop custom software tailored to your business needs, flexible, scalable, and ready to evolve as your ideas grow."
        },
        {
            icon: Rocket,
            title: "MVP & Startup Solutions",
            description: "We help startups and innovators bring ideas to life quickly with smart MVPs that focus on what truly matters, users, value, and feedback."
        },
        {
            icon: WrenchInCircle,
            title: "Maintenance, Optimization & Growth",
            description: "After launch, we help your product adapt, improve, and scale based on real data and user behavior."
        },
    ];

    // Split services into top (3) and bottom (2)
    const topRow = services.slice(0, 3);
    const bottomRow = services.slice(3, 5);

    const Card = ({ item }: {
        item: {
            icon: any; title: string; description: string
        }
    }) => (
        <div className="group relative bg-white border border-primary hover:border-secondary rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden min-h-[250px] flex flex-col justify-start text-left">
            {/* Hover Animation Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 opacity-10 transition-all duration-700 ease-in-out group-hover:top-12 group-hover:left-[85%] group-hover:w-10 group-hover:opacity-100 group-hover:scale-x-[-1] z-0 pointer-events-none">
                <Image
                    src="/images/logo.svg"
                    width={160}
                    height={160}
                    alt="Logo watermark"
                    className="w-full h-auto"
                />
            </div>

            <div className="relative z-10">
                <item.icon className="text-primary group-hover:text-secondary transition-colors duration-300 mb-4" size={32} />
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
                <h2 className="mb-4 text-4xl font-bold text-black font-roboto z-10 underline decoration-secondary-light decoration-6 underline-offset-12">Services</h2>

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
