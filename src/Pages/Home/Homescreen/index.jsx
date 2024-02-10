import HeroSection from "../HeroSection";
import Experiences from "../Experiences";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Footer from "../Footer";
import TechStack from "../TechStacks";


export default function Home() {
    return (
        <>
            <HeroSection />
            <TechStack />
            <Experiences />
            <AboutMe />
            <MyPortfolio />
            <Footer />
        </>
    )
}