import React from 'react';

const TechStack = () => {
    const techLogos = Array.from({ length: 14 }, (_, index) => ({
        id: index + 1,
        src: `https://www.albatech.id/Asset/Home/TechLogo/${index + 1}.png`,
        alt: `Technology ${index + 1}` 
    }));

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-6xl">
                {techLogos.map((logo) => (
                    <div key={logo.id} className="flex items-center justify-center p-6">
                        <img 
                            className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                            src={logo.src} 
                            alt={logo.alt}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;