import React, { useState, useEffect } from "react";
import "./Header.css";

const images = [
  { src: "/evg.jpg", alt: "Apple Products" },
  { src: "/evolexx.jpg", alt: "Samsung Products" },
  { src: "/accessories-hero.jpg", alt: "Accessories" },
];

const Header = ({ scrollToProducts }) => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Reset index instantly when reaching the cloned first slide
  useEffect(() => {
    if (index === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 1000); // Wait for transition to finish before resetting
    }
  }, [index]);

  return (
    <div className="header">
      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isTransitioning ? "transform 1s ease-in-out" : "none",
          }}
        >
          {/* Original Images */}
          {images.map((img, i) => (
            <div key={i} className="slide" style={{ backgroundImage: `url(${img.src})` }}>
              <div className="header-contents">
                <h2>{img.alt}</h2>
                <button onClick={scrollToProducts}>View Shop</button>
              </div>
            </div>
          ))}
          
          {/* Cloned First Image (For Seamless Transition) */}
          <div className="slide" style={{ backgroundImage: `url(${images[0].src})` }}>
            <div className="header-contents">
              <h2>{images[0].alt}</h2>
              <button onClick={scrollToProducts}>View Shop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
