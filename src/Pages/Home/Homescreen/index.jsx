import HeroSection from "../HeroSection";
import Experiences from "../Experiences";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Footer from "../Footer";
import TechStack from "../TechStacks";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";


export default function Home() {
    useScrollAnimation();

    return (
        <>
            <HeroSection />
            <div className="fade-in-section">
                <MyPortfolio />
            </div>
            <div className="fade-in-section">
                <Experiences />
            </div>
            <div className="fade-in-section profile--section">
                <div className="profile--header">
                    <p className="sub--title">About Me</p>
                    <h2 className="section--heading">Profile</h2>
                </div>
                <div className="about-skills-row">
                    <AboutMe />
                    <TechStack />
                </div>
            </div>
            <Footer />
        </>
    )
}