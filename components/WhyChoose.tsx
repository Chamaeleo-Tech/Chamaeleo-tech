import Image from "next/image";

export default function WhyChoose() {
    return (
        <section className="max-w-6xl bg-white mt-16 mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-3xl text-black md:text-4xl font-bold">
                    Why Choose <span className="text-purple-600">Chamaeleo</span>
                </h2>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    As an adaptive tech company, we deliver innovative digital solutions
                    that evolve with your needs.
                </p>

                <ul className="mt-4 text-gray-700 space-y-3">
                    <li>✔ Creative + technical expertise</li>
                    <li>✔ Adaptive websites, mobile apps & automation</li>
                    <li>✔ Long-term collaboration and client-focused</li>
                </ul>
            </div>

            <div className="flex justify-center">
                <Image
                    src="/images/illustration.png"
                    width={380}
                    height={380}
                    alt="Illustration"
                />
            </div>
        </section>
    );
}
