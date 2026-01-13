import FAQAccordion from "@/components/FAQ/FAQAccordion";
import FAQContact from "@/components/FAQ/FAQContact";
import FAQHero from "@/components/FAQ/FAQHero";
import MoveInView from "@/components/Animations/MoveInView";

export default function FAQPage() {
    return (
        <main className="w-full bg-gray-50 overflow-hidden">
            <MoveInView>
                <FAQHero />
            </MoveInView>
            <MoveInView delay={0.2}>
                <FAQAccordion />
            </MoveInView>
            <MoveInView delay={0.2}>
                <FAQContact />
            </MoveInView>
        </main>
    );
}
