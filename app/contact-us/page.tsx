import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import ContactNewsletter from "@/components/Contact/ContactNewsletter";
import ContactSteps from "@/components/Contact/ContactSteps";
import MoveInView from "@/components/Animations/MoveInView";

export default function ContactPage() {
    return (
        <main className="w-full bg-gray-50">
            <MoveInView>
                <ContactHero />
            </MoveInView>

            <div className="max-w-7xl mx-auto px-6 relative mb-16">
                {/* Background Decoration if needed */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 overflow-hidden">
                    {/* Placeholder for potential background svgs */}
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10 mt-16 lg:mt-20 items-start">
                    {/* Left Side: Steps (Interactive) */}
                    <div className="w-full lg:w-5/12 pt-0">
                        <MoveInView direction="left" delay={0.2}>
                            <ContactSteps />
                        </MoveInView>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-7/12">
                        <div className="relative">
                            <MoveInView direction="right" delay={0.4}>
                                <ContactForm />
                            </MoveInView>
                        </div>
                    </div>
                </div>
            </div>

            <MoveInView delay={0.2}>
                <ContactNewsletter />
            </MoveInView>
        </main>
    );
}
