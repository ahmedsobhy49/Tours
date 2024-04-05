import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, handleNotInterested }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const lessInfo = info.split(" ").slice(0, 40).join(" ");

  function handleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <article className="single-tour">
      <span className="tour-price">{price}</span>
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          <span className="info">{isCollapsed ? `${lessInfo}...` : info}</span>
          <button className="info-btn" onClick={handleCollapse}>
            {isCollapsed ? "Read More" : "Show Less"}
          </button>
        </p>
        <button
          className="delete-btn btn btn-block"
          onClick={() => {
            handleNotInterested(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
