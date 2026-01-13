import Hero from "../components/Home/Hero";
import WhyChoose from "../components/Home/WhyChoose";
import Services from "../components/Home/Services";
import Consultant from "@/components/Home/Consultant";
import MoveInView from "@/components/Animations/MoveInView";
import Peeker from "@/components/Animations/Peeker";

export default function Home() {
    return (
        <div className="bg-gray-100 overflow-hidden relative">
            <MoveInView>
                <Hero />
            </MoveInView>

            {/* Gap 1 */}
            <Peeker direction="right" />

            <MoveInView delay={0.2}>
                <WhyChoose />
            </MoveInView>

            {/* Gap 2 */}
            <Peeker direction="left" />

            <MoveInView delay={0.2}>
                <Services />
            </MoveInView>

            {/* Gap 3 */}
            <Peeker direction="right" />

            <MoveInView delay={0.2}>
                <Consultant />
            </MoveInView>
        </div>
    );
}
