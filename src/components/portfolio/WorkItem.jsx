import { useState } from "react";

const WorkItem = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);

  const popup = () => {
    setShowPopup(!showPopup);
    const popupBox = document.getElementById("popup");
    popupBox.classList.remove("popup__hide");
    function close() {
      popupBox.classList.add("popup__hide");
      setShowPopup(showPopup);
    }
    setTimeout(function () {
      close();
    }, 3000);
  };

  return (
    <div className="work__card" key={item.id}>
      <a href={item.deployed ? item.website : null} target="_blank">
        <img
          src={item.image}
          alt=""
          className="work__img"
          onClick={!item.deployed ? popup : null}
        />
      </a>
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      <div className="work__links">
        <a
          href={item.deployed ? item.website : null}
          target="_blank"
          className="work__button"
          onClick={!item.deployed ? popup : null}
        >
          View website{" "}
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a href={item.github} target="_blank" className="work__button">
          <i className="uil uil-github work__button-icon"></i>
        </a>
      </div>
      {!item.deployed && (
        <p id="popup" className="popup popup__hide">
          Project is in maintenance but you can still check its GitHub
          repository.
        </p>
      )}
    </div>
  );
};

export default WorkItem;
