import { memo } from 'react';
import data from "../../data/index.json";

function TechStack() {
    return (
        <div className="tech-stack-section">
            <div className="tech-stack-title-container">
                <h1 className="tech-stack-title">Skills</h1>
            </div>
            <div className="tech-stack-icons-container">
                {data.techStacks.map((stack, index) => (
                    <div key={index} className="tech-stack-icon" title={stack.name}>
                        <img src={stack.icon} alt={stack.name} loading="lazy" />
                    </div>
                ))}
            </div>

            <div className="cert-interest-row">
                <div className="cert-interest-column">
                    <div className="tech-stack-title-container">
                        <h1 className="tech-stack-title">Certificates</h1>
                    </div>
                    <div className="tech-stack-icons-container">
                        {data.certificates.map((cert, index) => (
                            <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="tech-stack-icon certificate-icon" title={cert.name}>
                                <img src={cert.icon} alt={cert.name} loading="lazy" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="cert-interest-column">
                    <div className="tech-stack-title-container">
                        <h1 className="tech-stack-title">Interests</h1>
                    </div>
                    <div className="tech-stack-icons-container">
                        <div className="tech-stack-icon interest-icon" title="Football">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                className="interest-svg"
                            >
                                <path d="M231.8,134.8a4.8,4.8,0,0,0,0-1.2c.1-1.9.2-3.7.2-5.6a103.2,103.2,0,0,0-23-65.1,5.5,5.5,0,0,0-1.4-1.7,103.9,103.9,0,0,0-41.1-29.8l-1.1-.4a103.4,103.4,0,0,0-74.8,0l-1.1.4A103.9,103.9,0,0,0,48.4,61.2,5.5,5.5,0,0,0,47,62.9,103.2,103.2,0,0,0,24,128c0,1.9.1,3.7.2,5.6a4.8,4.8,0,0,0,0,1.2,104.2,104.2,0,0,0,15.7,48.4,9.9,9.9,0,0,0,1.1,1.7,104.3,104.3,0,0,0,60.3,43.6h.3a104.2,104.2,0,0,0,52.8,0h.3A104.3,104.3,0,0,0,215,184.9a9.9,9.9,0,0,0,1.1-1.7A104.2,104.2,0,0,0,231.8,134.8ZM68.5,117.1l13.2,4.3,12.7,39.2-8.1,11.2H51.7a86.2,86.2,0,0,1-11.2-34.3Zm119,0,28,20.4a86.2,86.2,0,0,1-11.2,34.3H169.7l-8.1-11.2,12.7-39.2ZM193.2,69l-10.7,32.9-13.2,4.3L136,81.9V68.1l28-20.4A87,87,0,0,1,193.2,69ZM92,47.7l28,20.4V81.9L86.7,106.2l-13.2-4.3L62.8,69A87,87,0,0,1,92,47.7Zm18,166.4L99.3,181.2l8.1-11.2h41.2l8.1,11.2L146,214.1a86.2,86.2,0,0,1-36,0Z"/>
                            </svg>
                        </div>
                        <div className="tech-stack-icon interest-icon" title="League of Legends">
                            <img src="./img/Profile/Interest/LoL.png" alt="League of Legends" loading="lazy" style={{width: '80px', height: '80px', objectFit: 'contain'}} />
                        </div>
                        <div className="tech-stack-icon interest-icon" title="Gym">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                                className="interest-svg"
                            >
                                <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(TechStack);