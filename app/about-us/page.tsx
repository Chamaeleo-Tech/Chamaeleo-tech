import AboutHero from "@/components/About/AboutHero";
import MissionVision from "@/components/About/MissionVision";
import TrustedPlace from "@/components/About/TrustedPlace";
import Team from "@/components/About/Team";
import ReachOut from "@/components/About/ReachOut";
import MoveInView from "@/components/Animations/MoveInView";
import Peeker from "@/components/Animations/Peeker";

export default function AboutUs() {
    return (
        <div className="bg-gray-100 overflow-hidden relative">
            <MoveInView>
                <AboutHero />
            </MoveInView>

            <Peeker direction="right" />

            <MoveInView delay={0.2}>
                <MissionVision />
            </MoveInView>

            <Peeker direction="left" />

            <MoveInView delay={0.2}>
                <TrustedPlace />
            </MoveInView>

            <Peeker direction="right" />

            <MoveInView delay={0.2}>
                <Team />
            </MoveInView>

            <Peeker direction="left" />

            <MoveInView delay={0.2}>
                <ReachOut />
            </MoveInView>
        </div>
    );
}
