import Hero from "../components/Home/Hero";
import WhyChoose from "../components/Home/WhyChoose";
import Services from "../components/Home/Services";
import Consultant from "@/components/Home/Consultant";
import MoveInView from "@/components/Animations/MoveInView";

export default function Home() {
    return (
        <div className="bg-gray-100 overflow-hidden">
            <MoveInView>
                <Hero />
            </MoveInView>
            <MoveInView delay={0.2}>
                <WhyChoose />
            </MoveInView>
            <MoveInView delay={0.2}>
                <Services />
            </MoveInView>
            <MoveInView delay={0.2}>
                <Consultant />
            </MoveInView>
        </div>
    );
}
