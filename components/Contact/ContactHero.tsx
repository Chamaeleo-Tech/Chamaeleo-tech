export default function ContactHero() {
    return (
        <section
            className="w-full py-35 text-white relative bg-no-repeat bg-bottom bg-cover flex flex-col items-center text-center"
            style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
        >
            <div className="max-w-7xl mx-auto z-10">
                <h1 className="text-7xl md:text-6xl font-bold leading-tight font-roboto mb-6">
                    Need Help?
                </h1>
                <h2 className="text-7xl md:text-6xl font-bold font-roboto text-teal-400 mb-6">
                    Get in Touch
                </h2>

                <p className="text-lg font-poppins font-semibold max-w-4xl mx-auto leading-relaxed opacity-90">
                    Thank you for choosing Chamaeleo.tech, where technology adapts to your vision.
                    From websites and SaaS platforms to mobile apps and system integrations,
                    we craft scalable digital experiences that grow alongside your business.
                </p>
            </div>
        </section>
    );
}
