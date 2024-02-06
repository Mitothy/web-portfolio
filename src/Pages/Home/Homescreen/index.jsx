import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import Footer from "../Footer";
import TechStack from "../TechStacks";


export default function Home() {
    return (
        <>
            <HeroSection />
            <TechStack />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <Footer />
        </>
    )
}