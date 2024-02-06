import React, { useState } from 'react';
import data from "../../data/index.json";

export default function MyPortfolio() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle opening the modal with the selected image
    const openImageModal = (src) => {
        setSelectedImage(src);
    };

    // Function to close the modal
    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Recent Projects</p>
                    <h2 className="section--heading">My Portfolio</h2>
                </div>
            </div>
            <div className="portfolio--section--container">
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
                            {/* Assume the item.link is meant to be clickable; you'd need to adjust this as necessary */}
                            <p className="text-sm portfolio--link">{item.link}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal for displaying the clicked image */}
            <ImageModal src={selectedImage} onClose={closeImageModal} />
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