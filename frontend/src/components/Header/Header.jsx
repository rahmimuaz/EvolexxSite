import React, { useState, useEffect } from "react";
import "./Header.css";
import TransparentCard from '../TransparentCard/TransparentCard'

const images = [
  { src: "/Accessories.jpg", alt: "Apple Products" },
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
    }, 1000000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 1000); 
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
          <div className="slide" style={{ backgroundImage: `url(${images[0].src})` }}>
            <div className="header-contents">
              <div className="card1">
                {<TransparentCard />}
              </div>

            </div>
          </div>

          <div className="slide" style={{ backgroundImage: `url(${images[1].src})` }}>
            <div className="header-contents">
              <div>

              </div>
            </div>
          </div>

          <div className="slide" style={{ backgroundImage: `url(${images[2].src})` }}>
            <div className="header-contents">
            </div>
          </div>

          <div className="slide" style={{ backgroundImage: `url(${images[0].src})` }}>
            <div className="header-contents">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
