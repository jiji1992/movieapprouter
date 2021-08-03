import React from "react";

export const Filter = ({ ratingChanged }) => {
  let star = (x) => {
    let rang = document.getElementsByClassName("filter");
    for (var val of rang) val.style.color = "black";
    for (var i = 0; i < x; i++) rang[i].style.color = "yellow";
    ratingChanged(x);
  };
  return (
    <div>
      <i className="fa fa-star filter" onClick={star.bind(this, 1)}></i>
      <i className="fa fa-star filter" onClick={star.bind(this, 2)}></i>
      <i className="fa fa-star filter" onClick={star.bind(this, 3)}></i>
      <i className="fa fa-star filter" onClick={star.bind(this, 4)}></i>
      <i className="fa fa-star filter" onClick={star.bind(this, 5)}></i>
    </div>
  );
};
