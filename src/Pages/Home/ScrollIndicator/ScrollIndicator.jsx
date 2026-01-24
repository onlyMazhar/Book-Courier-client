import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight * 0.7,
            behavior: 'smooth'
        });
    };

    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <button
                onClick={scrollToNextSection}
                className="group flex flex-col items-center gap-2 text-primry/80 hover:text-primary transition-colors duration-300"
                aria-label="Scroll to next section"
            >

                <div>
                    <ChevronDown
                        size={35}
                        className="mt-2 animate-bounce text-primary/80 group-hover:text-primary"
                    />
                </div>
            </button>
        </div>
    );
};

export default ScrollIndicator;