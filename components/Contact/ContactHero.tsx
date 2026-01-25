export default function ContactHero() {
    return (
        <section
            className="w-full px-6 pt-32 pb-20 md:pt-40 md:pb-35 text-white relative bg-no-repeat bg-bottom bg-cover flex flex-col items-center text-center"
            style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
        >
            <div className="max-w-7xl mx-auto z-10">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-roboto mb-4 md:mb-6">
                    Need Help?
                </h1>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-roboto mb-6">
                    <span
                        className="relative inline-flex items-center bg-clip-text text-transparent animate-shimmer"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, color-mix(in srgb, var(--color-tertiary) 40%, white), #ffffff, var(--color-quaternary), var(--color-primary))",
                        }}
                    >
                        Get in Touch
                    </span>
                </h2>

                <p className="text-base md:text-lg font-poppins font-semibold max-w-4xl mx-auto leading-relaxed opacity-90 px-4">
                    Thank you for choosing Chamaeleo.tech, where technology adapts to your vision.
                    From websites and SaaS platforms to mobile apps and system integrations,
                    we craft scalable digital experiences that grow alongside your business.
                </p>
            </div>
        </section>
    );
}
