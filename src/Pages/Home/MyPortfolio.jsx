import React, { useState, useRef } from 'react';
import data from "../../data/index.json";

export default function MyPortfolio() {
    const [selectedImage, setSelectedImage] = useState(null);
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
            scrollContainerRef.current.scrollBy({ left: -450, behavior: 'smooth' }); // Adjust the value for smaller or larger scroll
        } else if (direction === 'right') {
            scrollContainerRef.current.scrollBy({ left: 450, behavior: 'smooth' }); // Adjust the value for smaller or larger scroll
        }
    };

    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Recent Projects</p>
                    <h2 className="section--heading">My Portfolio</h2>
                    <div className="scroll-buttons">
                        <button onClick={() => scroll('left')}>&larr;</button>
                        <button onClick={() => scroll('right')}>&rarr;</button>
                    </div>
                </div>
            </div>
            <div
                className="portfolio--section--container"
                ref={scrollContainerRef}
                style={{ position: 'relative' }}
            >
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div
                            className="portfolio--section--img"
                            onClick={() => openImageModal(item.images)} // Pass the array of images
                        >
                            <img src={item.src} alt={item.title || "Placeholder"} style={{ cursor: 'pointer' }} />
                        </div>
                        <div className="portfolio--section--card--content">
                            <h3 className="portfolio--section--title">{item.title}</h3>
                            <p className="text-md">{item.description}</p>
                            <p className="text-sm portfolio--link">{item.link}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && <ImageModal src={selectedImage} onClose={closeImageModal} />}
        </section>
    );
}

function ImageModal({ src, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % src.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + src.length) % src.length);
    };

    if (!src || src.length === 0) return null;

    return (
        <div className="image-modal-overlay" onClick={onClose}>
            <div className="image-modal-nav" onClick={(e) => e.stopPropagation()}>
                <button className="image-modal-button" onClick={prevImage}>&lt;</button>
                <button className="image-modal-button" onClick={nextImage}>&gt;</button>
            </div>
            <img src={src[currentImageIndex]} alt="Zoomed In" className="image-modal-image" />
        </div>
    );
}