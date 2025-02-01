import React from "react";
import "./TransparentCard.css"; // Link to the CSS file for styles

const TransparentCard = () => {
  return (
    <div className="transparent-card">
      <img src="/your-image.jpg" alt="Card Image" className="card-image" />
      <div className="card-content">
        <h5 className="card-title">Card Title</h5>
        <p className="card-description">This is some description text inside the card. You can add more details here.</p>
      </div>
    </div>
  );
};

export default TransparentCard;
