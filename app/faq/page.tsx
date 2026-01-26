import FAQAccordion from "@/components/FAQ/FAQAccordion";
import FAQContact from "@/components/FAQ/FAQContact";
import FAQHero from "@/components/FAQ/FAQHero";
import MoveInView from "@/components/Animations/MoveInView";
import Peeker from "@/components/Animations/Peeker";

export default function FAQPage() {
    return (
        <main className="w-full bg-gray-50 overflow-hidden relative">
            <MoveInView>
                <FAQHero />
            </MoveInView>

            <Peeker direction="right" />

            <MoveInView delay={0.2}>
                <FAQAccordion />
            </MoveInView>

            <Peeker direction="left" />

            <MoveInView delay={0.2}>
                <FAQContact />
            </MoveInView>
        </main>
    );
}
