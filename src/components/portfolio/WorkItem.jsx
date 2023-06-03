import React from "react";

const WorkItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      <div className="work__links">
        <a href="#" className="work__button">
          View website{" "}
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a href={item.github} className="work__button">
          <i className="uil uil-github work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItem;
