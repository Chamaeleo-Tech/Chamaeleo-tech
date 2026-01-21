import { BarChart3, Users, FileText, MonitorCheck } from "lucide-react";

export default function TrustedPlace() {
    const cards = [
        {
            title: "Personalizes Search",
            icon: BarChart3,
            color: "bg-secondary" // Purple
        },
        {
            title: "Experienced Teams",
            icon: Users,
            color: "bg-primary" // Teal
        },
        {
            title: "Track Work",
            icon: FileText,
            color: "bg-tertiary" // Light Green
        },
        {
            title: "Client-Centric",
            icon: MonitorCheck,
            color: "bg-quaternary" // Blue
        }
    ];

    return (
        <section className="w-full py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="mb-12 text-3xl font-bold font-roboto flex justify-center z-10 text-black underline decoration-secondary-light decoration-6 underline-offset-12">
                    Your Trusted Place
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`${card.color} h-64 rounded-xl flex flex-col items-center justify-center text-white shadow-lg transition-transform hover:-translate-y-2`}
                        >
                            <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm">
                                <card.icon size={32} />
                            </div>
                            <h3 className="text-lg font-bold font-roboto">{card.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
