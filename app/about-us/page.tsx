import AboutHero from "@/components/About/AboutHero";
import MissionVision from "@/components/About/MissionVision";
import TrustedPlace from "@/components/About/TrustedPlace";
import Team from "@/components/About/Team";
import ReachOut from "@/components/About/ReachOut";
import MoveInView from "@/components/Animations/MoveInView";

export default function AboutUs() {
    return (
        <div className="bg-gray-100 overflow-x-hidden">
            <MoveInView>
                <AboutHero />
            </MoveInView>
            <MoveInView delay={0.2}>
                <MissionVision />
            </MoveInView>
            <MoveInView delay={0.2}>
                <TrustedPlace />
            </MoveInView>
            <MoveInView delay={0.2}>
                <Team />
            </MoveInView>
            <MoveInView delay={0.2}>
                <ReachOut />
            </MoveInView>
        </div>
    );
}
