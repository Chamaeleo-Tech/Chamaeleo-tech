import Image from "next/image";

export default function WhyChoose() {
    return (
        <section className="mx-auto w-[calc(100%-2.5rem)] max-w-7xl bg-white mt-16 px-6 py-20 grid md:grid-cols-2 gap-12 rounded-lg">
            <div>
                <h1 className="text-3xl text-black md:text-4xl font-bold font-roboto">
                    Why Choose <span className="text-purple-600">Chamaeleo</span>
                </h1>

                <p className="mt-4 text-gray-700 leading-relaxed font-poppins">
                    As an adaptive tech company, we take pride in delivering innovative digital solutions that evolve with every client’s needs.
                    Expertise and Innovation: Our team blends creativity and technical expertise to design and develop adaptive software, websites, and mobile apps that drive real impact.

                    Comprehensive Solutions: From UX/UI design and web development to business process automation and custom app creation, we provide end-to-end services tailored to your goals.
                    Client-Centered Approach: We believe in long-term collaboration and adaptability — your growth fuels our innovation, and your success is our priority.
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
