import React, { useState, useRef, memo } from 'react';
import data from "../../data/index.json";

export default function MyPortfolio() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const openImageModal = (images) => {
        setSelectedImage(images); // Now, selectedImage is an array of image URLs
    };
    const closeImageModal = () => {
        setSelectedImage(null);
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
                            onClick={() => openImageModal(item.images)} // Pass the array of images
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
            {selectedImage && <ImageModal src={selectedImage} onClose={closeImageModal} />}
        </section>
    );
}

const ImageModal = memo(function ImageModal({ src, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % src.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + src.length) % src.length);
    };

    if (!src || src.length === 0) return null;

    return (
        <div className="image-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image gallery modal">
            <div className="image-modal-nav" onClick={(e) => e.stopPropagation()}>
                <button className="image-modal-button" onClick={prevImage} aria-label="Previous image">&lt;</button>
                <button className="image-modal-button" onClick={nextImage} aria-label="Next image">&gt;</button>
            </div>
            <img src={src[currentImageIndex]} alt="Zoomed In" className="image-modal-image" loading="lazy" />
        </div>
    );
});