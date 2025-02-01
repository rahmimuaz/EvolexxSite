import React, { useState, useEffect } from "react";
import "./Header.css";
import TransparentCard from '../TransparentCard/TransparentCard'

const images = [
  { src: "/evolexx.jpg", alt: "Apple Products" },
  { src: "/samsung.jpg", alt: "Samsung Products" },
  { src: "/Accessories.jpg", alt: "Accessories" },
];

const Header = ({ scrollToProducts }) => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prevIndex) => prevIndex + 1);
    }, 500000); // Slide every 3 seconds

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
          {/* First Image Div */}
          <div className="slide" style={{ backgroundImage: `url(${images[0].src})` }}>
            <div className="header-contents">
              <h2>{images[0].alt}</h2>
              <div className="card1">
                {<TransparentCard/>}
              </div>
              <button onClick={scrollToProducts}>View Shop</button>
            </div>
          </div>
          
          {/* Second Image Div */}
          <div className="slide" style={{ backgroundImage: `url(${images[1].src})` }}>
            <div className="header-contents">
              <h2>{images[1].alt}</h2>
              <div>
                {<TransparentCard/>}
              </div>
              <button onClick={scrollToProducts}>Explore More</button>
            </div>
          </div>

          {/* Third Image Div */}
          <div className="slide" style={{ backgroundImage: `url(${images[2].src})` }}>
            <div className="header-contents">
              <h2>{images[2].alt}</h2>
              <button onClick={scrollToProducts}>Shop Now</button>
            </div>
          </div>
          
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
