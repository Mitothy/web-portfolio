import data from "../../data/index.json";

export default function Experiences() {
    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">About Me</p>
                <h2 className="skills-section--heading">Experiences</h2>
            </div>
            <div className="skills--section--container">
                {data?.experiences?.map((item, index) => (
                    <div key={index} className="skills--section--card">

                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <h2 className="skills--section--subtitle">{item.subtitle}</h2>
                            <p className="skills--section--description">{item.description}</p>
                        </div>
                        <div className="skills-section--img">
                            <img src={item.src} alt="Product Chain"></img>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}