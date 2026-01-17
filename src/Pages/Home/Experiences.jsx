import { memo } from 'react';

const professionalData = [
    {
        id: 1,
        company: "International Netherlands Group (ING)",
        role: "Retail Technology Intern",
        date: "March 2025 - September 2025",
        logo: "./img/Experiences/Professional/ing.png",
        bullets: [
            "Created 3 comprehensive Grafana dashboards for team services, averaging 25 panels per board, featuring core metrics including request totals, success/failure rates, error breakdowns, and analytical insights.",
            "Developed production-ready endpoints for Registry Notes service with complete unit testing coverage, successfully deploying all code to the production environment after thorough testing and validation.",
            "Became the first intern in team history to participate in the Lifecycle Management Cycle for major services, updating dependencies and removing security vulnerabilities for production deployment.",
            "Designed 3 technical infographics documenting team learnings and knowledge transfer materials covering new libraries, pipelines, and infrastructure technologies.",
            "Actively participated in all Agile team operations, including daily SCRUM meetings, sprint planning sessions, and retrospectives."
        ]
    },
    {
        id: 2,
        company: "Shopee Philippines Inc.",
        role: "Operations Product Intern",
        date: "November 2024 - February 2025",
        logo: "./img/Experiences/Professional/shopee.png",
        bullets: [
            "Led comprehensive User Acceptance Testing initiatives for 16 projects across Shopee Games, Shopee Seller Center, and Shopee Affiliate platforms, ensuring software quality through systematic test case execution and defect tracking.",
            "Participated in product demonstration meetings, presented verified changes to stakeholders and clients, and gathered feedback for future iterations while creating detailed documentation for weekly business PIC meetings"
        ]
    },
    {
        id: 3,
        company: "Thinking Machines Data Science Inc.",
        role: "Data Operations Engineer Intern",
        date: "June 2024 - August 2024",
        logo: "./img/Experiences/Professional/thinking-machines.png",
        bullets: [
            "Developed in-house ETL software and comprehensive support ticket dashboard using Python, Alembic, PostgreSQL, Dagster, and Pydantic, enhancing team productivity and client service delivery.",
            "Engineered a data pipeline to extract and ingest Jira data into a Dockerized application with BigQuery storage, implementing a monitoring dashboard for ticket deadlines, age, resolution time, and summary tracking.",
            "Assisted Customer Success Managers in monitoring team Jira tickets and ensuring Service Level Agreement adherence while contributing to a high-visibility Christmas Greeter 2D pixel game proof of concept."
        ]
    }
];

const leadershipData = [
    {
        id: 1,
        company: "DLSU ENGLICOM",
        role: "Executive Vice President for Operations",
        date: "December 2021 - August 2025",
        logo: "./img/Experiences/Leadership/ENGLICOM.png",
        bullets: [
            "2021-2022: Started as a Finance Trainee and earned the Outstanding Finance Trainee Award for exceptional performance in handling documents and assisting with Finance processes.",
            "2022-2023: Promoted to Committee Coordinator for Finance, then Assistant Vice President for Finance during Term 2. Coordinated logistics for the Chinese New Year 2023 flagship event with 1,060 participants, anaging speakers, performers, food suppliers, and university office coordination.",
            "2023-2024: Served as Vice President for the Finance Committee, leading a team of 27 officers and managing organizational funds exceeding PHP 1.5 million, generating PHP 411,750.98 in revenue during Term 1.",
            "2024-2025: Ended as Executive Vice President for Operations, part of the organization's \"Big 4\" leadership team responsible for major organizational decisions and overseeing all backend operations, including Documentation and Finance divisions.",
            "Achievements: Consistently achieved top organizational rankings, including Top 1 overall in Operations, Documentation, and Finance divisions for Terms 1-2 AY 2024-2025, and sustained Top 3-4 Finance rankings among all De La Salle University organizations AY 2023-2024."
        ]
    },
    {
        id: 2,
        company: "Computer Batch 2T25 (CATCH2T25)",
        role: "Project Management Chairperson",
        date: "January 2023 - August 2023",
        logo: "./img/Experiences/Leadership/CATCH2T25.jpg",
        bullets: [
            "Oversaw project management activities, including documentation, planning, and monitoring of all events.",
            "Directed committee operations, ensuring regular progress meetings and effective task delegation.",
            "Successfully executed and documented 10 events for the student government with a team of 8 officers."
        ]
    }
];

function Experiences() {
    return (
        <section className="experience--section" id="mySkills">
            <div className="experience--header">
                <p className="sub--title">About Me</p>
                <h2 className="section--heading">Experiences</h2>
            </div>
            <div className="experience--timeline-container">
                {/* Professional */}
                <h3 className="experience--section-title">Professional</h3>
                {professionalData.map((item, index) => (
                    <div key={item.id} className="experience--item">
                        <div className="experience--logo">
                            {item.logo ? (
                                <img src={item.logo} alt={item.company} className="logo-img" />
                            ) : (
                                <div className="logo-placeholder">{item.company.charAt(0)}</div>
                            )}
                        </div>
                        <div className="experience--content">
                            <h3 className="experience--company">{item.company}</h3>
                            <p className="experience--role">{item.role}</p>
                            <p className="experience--date">{item.date}</p>
                            <ul className="experience--bullets">
                                {item.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                        {index < professionalData.length - 1 && (
                            <div className="experience--line"></div>
                        )}
                    </div>
                ))}

                {/* Divider */}
                <div className="experience--divider"></div>

                {/* Leadership */}
                <h3 className="experience--section-title">Leadership</h3>
                {leadershipData.map((item, index) => (
                    <div key={item.id} className="experience--item">
                        <div className="experience--logo">
                            {item.logo ? (
                                <img src={item.logo} alt={item.company} className="logo-img" />
                            ) : (
                                <div className="logo-placeholder">{item.company.charAt(0)}</div>
                            )}
                        </div>
                        <div className="experience--content">
                            <h3 className="experience--company">{item.company}</h3>
                            <p className="experience--role">{item.role}</p>
                            <p className="experience--date">{item.date}</p>
                            <ul className="experience--bullets">
                                {item.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                        {index < leadershipData.length - 1 && (
                            <div className="experience--line"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default memo(Experiences);