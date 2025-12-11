import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import ContactNewsletter from "@/components/Contact/ContactNewsletter";
import ContactSteps from "@/components/Contact/ContactSteps";

export default function ContactPage() {
    return (
        <main className="w-full bg-gray-50 overflow-x-hidden">
            <ContactHero />

            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative">
                {/* Background Decoration if needed */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 overflow-hidden">
                    {/* Placeholder for potential background svgs */}
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
                    {/* Left Side: Steps (Interactive) */}
                    <div className="w-full lg:w-5/12 pt-8">
                        <ContactSteps />
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-7/12">
                        <div className="relative">
                            {/* Purple border effect wrapper if needed, or handled in component */}
                            {/* The form component has its own styles, but let's ensure it fits well */}
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            <ContactNewsletter />
        </main>
    );
}
