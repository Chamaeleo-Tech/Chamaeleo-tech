import { BarChart3, Users, FileText, MonitorCheck } from "lucide-react";

export default function TrustedPlace() {
    const cards = [
        {
            title: "Personalizes Search",
            icon: BarChart3,
            color: "bg-[#B000DC]" // Purple
        },
        {
            title: "Experienced Teams",
            icon: Users,
            color: "bg-[#00ACAA]" // Teal
        },
        {
            title: "Track Work",
            icon: FileText,
            color: "bg-[#45D685]" // Light Green
        },
        {
            title: "Client-Centric",
            icon: MonitorCheck,
            color: "bg-[#008CC1]" // Blue
        }
    ];

    return (
        <section className="w-full py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12 relative inline-block w-full">
                    <h2 className="text-3xl font-bold font-roboto inline-block relative z-10 text-black">
                        Your Trusted Place
                        <div className="absolute -bottom-1 left-0 w-full h-1/7 bg-purple-600 -z-0 opacity-50"></div>
                    </h2>
                </div>

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
