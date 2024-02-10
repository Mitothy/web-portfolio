import React, { useState, useRef } from 'react';
import data from "../../data/index.json";

export default function MyPortfolio() {
    const [selectedImage, setSelectedImage] = useState(null);
    const scrollContainerRef = useRef(null);

    const openImageModal = (src) => {
        setSelectedImage(src);
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
                            onClick={() => openImageModal(item.src)}
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
    if (!src) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                zIndex: 1000, // Ensure the modal is above other content
            }}
            onClick={onClose}
        >
            <img src={src} alt="Zoomed" style={{
                transform: 'scale(1.5)', // Adjust scale as needed
                objectFit: 'contain',
                maxWidth: '100%', // Ensure the image does not overflow the viewport
                maxHeight: '100%',
            }} />
        </div>
    );
}