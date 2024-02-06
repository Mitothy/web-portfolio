import data from "../../data/index.json";

export default function TechStack() {
    return (
        <div className="tech-stack-section">
            <div className="tech-stack-title-container">
                <h1 className="tech-stack-title">Skills</h1>
            </div>
            <div className="tech-stack-icons-container">
                {data.techStacks.map((stack, index) => (
                    <div key={index} className="tech-stack-icon" title={stack.name}>
                        <img src={stack.icon} alt={stack.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};