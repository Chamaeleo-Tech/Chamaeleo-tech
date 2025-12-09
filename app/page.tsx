import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Services from "../components/Services";

export default function Home() {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <Hero />
            <WhyChoose />
            <Services />
        </div>
    );
}
