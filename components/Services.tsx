export default function Services() {
    const items = [
        "Web Design & Development",
        "Mobile Apps",
        "Custom Systems & Automation",
        "Digital Growth Solutions",
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-black">Services</h2>

                <p className="text-gray-600 mt-2">
                    Built to evolve with you — flexible, scalable, and modern.
                </p>

                <div className="grid md:grid-cols-4 gap-6 mt-12">
                    {items.map((s) => (
                        <div key={s} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="font-semibold text-purple-700">{s}</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Turning visitors into loyal customers.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
