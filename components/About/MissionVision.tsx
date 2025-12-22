import { BarChart3, Eye } from "lucide-react";

export default function MissionVision() {
    const cards = [
        {
            title: "Our Mission",
            description: "Designing adaptive digital solutions that empower businesses to grow and stay ahead.",
            icon: BarChart3
        },
        {
            title: "Our Vision",
            description: "Shaping a future where technology adapts to people through innovation and creativity.",
            icon: Eye
        }
    ];

    return (
        <section className="w-full -mt-10 pb-20 relative z-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="group bg-white rounded-xl p-10 shadow-lg text-center transition-all duration-100 hover:bg-gradient-to-br hover:from-secondary-light hover:to-secondary hover:text-white"
                    >
                        <div className="mb-4 inline-flex items-center justify-center text-secondary group-hover:text-white transition-colors duration-1000">
                            <card.icon size={40} />
                        </div>
                        <h3 className="text-2xl font-bold font-roboto mb-4 text-secondary group-hover:text-white transition-colors duration-1000">
                            {card.title}
                        </h3>
                        <p className="text-gray-600 font-poppins group-hover:text-white/90 transition-colors duration-1000">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
