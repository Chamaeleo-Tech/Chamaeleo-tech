export default function FAQHero() {
    return (
        <section
            className="w-full pt-40 pb-40 text-white relative bg-no-repeat bg-bottom bg-cover flex flex-col items-center text-center"
            style={{ backgroundImage: "url('./images/faq-bg.svg')" }}
        >

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold font-roboto text-white mb-2">
                    Have Question?
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold font-roboto text-secondary mb-6 relative inline-block">
                    We Have Answers
                </h2>
                <p className="text-white text-lg md:text-xl font-poppins max-w-2xl mx-auto leading-relaxed">
                    Some questions about Chamaeleo are asked frequently. We have compiled a list of the most common questions people usually ask us!
                </p>
            </div>
        </section>
    );
}
