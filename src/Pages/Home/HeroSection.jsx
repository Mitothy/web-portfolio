import { Button } from "react-scroll";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className = "hero--section--content--box">
                <div className = "hero--section--content">
                    <p className = "section--title">
                        Hey, I'm Tim
                    </p>
                    <h1 className ="hero--section--title">
                        <span className ="hero-section--title--color">Full Stack</span>
                        <br />
                        Developer
                    </h1>
                    <p className = "hero--section--description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et possimus blanditiis quidem sint quisquam est, consectetur expedita veniam. Vero qui quibusdam cupiditate aliquam accusantium dolorum ratione laboriosam, ad quam. Necessitatibus!
                    </p>
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="hero-section--img">
                <img src ="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
}