import AboutHero from "@/components/About/AboutHero";
import MissionVision from "@/components/About/MissionVision";
import TrustedPlace from "@/components/About/TrustedPlace";
import Team from "@/components/About/Team";
import ReachOut from "@/components/About/ReachOut";

export default function AboutUs() {
    return (
        <div className="bg-gray-100 overflow-x-hidden">
            <AboutHero />
            <MissionVision />
            <TrustedPlace />
            <Team />
            <ReachOut />
        </div>
    );
}
