export default function FAQHero() {
    return (
        <section
            className="w-full pt-32 pb-20 md:pt-40 md:pb-40 text-white relative bg-no-repeat bg-bottom bg-cover flex flex-col items-center text-center"
            style={{ backgroundImage: "url('./images/faq-bg.svg')" }}
        >

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold font-roboto text-white mb-2">
                    Have Question?
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-6 relative inline-block">
                    <span
                        className="relative inline-flex items-center bg-clip-text text-transparent animate-shimmer"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, color-mix(in srgb, var(--color-tertiary) 40%, white), #ffffff, var(--color-quaternary), var(--color-secondary))",
                        }}
                    >
                        We Have Answers
                    </span>
                </h2>
                <p className="text-white text-lg md:text-xl font-semibold font-poppins max-w-2xl mx-auto leading-relaxed">
                    Some questions about Chamaeleo are asked frequently. We have compiled a list of the most common questions people usually ask us!
                </p>
            </div>
        </section>
    );
}
