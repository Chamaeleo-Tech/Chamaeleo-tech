import Hero from "../components/Home/Hero";
import WhyChoose from "../components/Home/WhyChoose";
import Services from "../components/Home/Services";
import Consultant from "@/components/Home/Consultant";

export default function Home() {
    return (
        <div className="bg-gray-100">
            <Hero />
            <WhyChoose />
            <Services />
            <Consultant />
        </div>
    );
}
