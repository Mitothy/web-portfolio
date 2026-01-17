import React, { useState, useRef, memo } from 'react';
import data from "../../data/index.json";

export default function MyPortfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const openImageModal = (project) => {
        setSelectedProject(project); // Pass the entire project object
    };
    const closeImageModal = () => {
        setSelectedProject(null);
    };


    // Scroll function
    const scroll = (direction) => {
        if (direction === 'left') {
            scrollContainerRef.current.scrollBy({ left: -450, behavior: 'smooth' });
        } else if (direction === 'right') {
            scrollContainerRef.current.scrollBy({ left: 450, behavior: 'smooth' });
        }
        updateActiveIndex();
    };

    // Update active index based on scroll position
    const updateActiveIndex = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const cardWidth = 470; // card width + gap
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(index);
        }
    };

    // Track scroll position
    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', updateActiveIndex);
            return () => container.removeEventListener('scroll', updateActiveIndex);
        }
    }, []);

    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Recent Projects</p>
                    <h2 className="section--heading">My Portfolio</h2>
                    <div className="scroll-buttons">
                        <button onClick={() => scroll('left')} aria-label="Scroll portfolio left">&larr;</button>
                        <button onClick={() => scroll('right')} aria-label="Scroll portfolio right">&rarr;</button>
                    </div>
                </div>
            </div>
            <div
                className="portfolio--section--container"
                ref={scrollContainerRef}
            >
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div
                            className="portfolio--section--img"
                            onClick={() => openImageModal(item)} // Pass the entire project object
                        >
                            <img src={item.src} alt={item.title || "Placeholder"} loading="lazy" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <h3 className="portfolio--section--title">{item.title}</h3>
                            <p className="text-md">{item.description}</p>
                            <a href={item.site} target="_blank" rel="noopener noreferrer" className="text-sm portfolio--link">
                                {item.link}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="portfolio-indicators">
                {data?.portfolio?.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => {
                            scrollContainerRef.current.scrollTo({ left: index * 470, behavior: 'smooth' });
                        }}
                    />
                ))}
            </div>
            {selectedProject && <ImageModal project={selectedProject} onClose={closeImageModal} />}
        </section>
    );
}

const ImageModal = memo(function ImageModal({ project, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };

    if (!project || !project.images || project.images.length === 0) return null;

    return (
        <div className="image-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image gallery modal">
            <button className="image-modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="image-modal-button image-modal-button-left" onClick={prevImage} aria-label="Previous image">&lt;</button>
                <div className="image-modal-center">
                    <img src={project.images[currentImageIndex]} alt={`${project.title} - Image ${currentImageIndex + 1}`} className="image-modal-image" loading="lazy" />
                    <div className="image-modal-description">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                </div>
                <button className="image-modal-button image-modal-button-right" onClick={nextImage} aria-label="Next image">&gt;</button>
            </div>
        </div>
    );
});