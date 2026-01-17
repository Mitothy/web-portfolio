import { memo } from 'react';

function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Timothy Joshua Tan</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Software Engineer</span>{" "}
                    </h1>
                    <p className="hero--section-description">
                        I'm a recent Computer Science Software Engineering Graduate from De La Salle University Manila
                        with experience in Data Science and Backend. I love being challenged,
                        enjoy building things that last, and never stop trying to learn new things.
                    </p>
                </div>
                <br />
                <a className="btn btn-primary" href="./Tan_CV.pdf" target="_blank" rel="noopener noreferrer">
                    Download CV </a>
            </div>
            <div className="hero--section--img">
                <img src="./img/profile-picture.png" alt="Hero Section" />
            </div>
        </section>
    );
}

export default memo(HeroSection);