import FAQAccordion from "@/components/FAQ/FAQAccordion";
import FAQContact from "@/components/FAQ/FAQContact";
import FAQHero from "@/components/FAQ/FAQHero";

export default function FAQPage() {
    return (
        <main className="w-full bg-gray-50">
            <FAQHero />
            <FAQAccordion />
            <FAQContact />
        </main>
    );
}
