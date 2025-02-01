import React from "react";
import "./TransparentCard.css"; // Link to the CSS file for styles

const TransparentCard = () => {
  return (
    <div className="transparent-card">
     <div className="one">
      <img src ='/111.jpg' alt="Card Image" className="card-image" />
      <div className="card-content">
        <h5 className="card-title">Card Title</h5>
        <p className="card-description">This is some description text inside the card. You can add more details here.</p>
      </div>
      </div>
      <div className="two">
      <img src ='/all.jpg' alt="Card Image" className="card-image2" />
      <div className="card-content">
        <h5 className="card-title">Card Title</h5>
        <p className="card-description">This is some description text inside the card. You can add more details here.</p>
      </div>
      </div>
    </div>
  );
};

export default TransparentCard;
