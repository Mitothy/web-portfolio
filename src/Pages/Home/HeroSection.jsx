export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Timothy Joshua Tan</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack Developer</span>{" "}
                    </h1>
                    <p className="hero--section-description">
                        I am currently an Undergraduate Student at De La Salle University Manila, <br />
                        taking up a Bachelor of Science in Computer Science with a Major in <br /> Software Technology.
                        I am a driven and committed person that wants to <br /> provide value to those around me.
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