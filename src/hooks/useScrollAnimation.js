import { useEffect } from 'react';

export const useScrollAnimation = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // Observe all elements with fade-in-section class
        const elements = document.querySelectorAll('.fade-in-section');
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);
};
