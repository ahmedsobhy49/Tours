import React from "react";
import Tour from "./Tour";
const Tours = ({ data, handleNotInterested }) => {
  return (
    <div className="tours">
      {data.map((tour) => {
        return (
          <Tour
            key={tour.id}
            {...tour}
            handleNotInterested={handleNotInterested}
          />
        );
      })}
    </div>
  );
};

export default Tours;
