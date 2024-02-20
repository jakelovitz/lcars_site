import React, { useState, useEffect } from 'react';
import './../assets/styling.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility
    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div class='wrap'>
            {isVisible && (
                <div className="scroll-top" onClick={scrollToTop}>
                    <a href="#!" style={{ display: 'inline' }}>Scroll to Top</a>
                </div>
            )}
        </div>
        
        
    );
};

export default ScrollToTopButton;