import { memo } from 'react';

function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/Profile/formal-picture.jpg" alt="About Me" loading="lazy" />
            </div>
            <div className="hero--section--content--box--about--section--box">
                <div className="hero--section-content">
                    <p className="aboutme--section-description">Hello! My name is Timothy Joshua O. Tan a recent undergraduate from De La Salle University Manila with a degree in Computer Science with a Major in Software Technology</p>

                    <p className="aboutme--section-description">I excel in fast-paced working environments and strive to produce quality output. When I commit to something, I give my full effort and always go beyond what is expected, prioritizing the success and growth of the team over individual recognition and enjoying working closely with those around me.</p>

                    <p className="aboutme--section-description">Always looking to push myself to learn and grow as an individual and leader. Striving for Character and Excellence.  </p>
                </div>
            </div>
        </section>
    );
}

export default memo(AboutMe);