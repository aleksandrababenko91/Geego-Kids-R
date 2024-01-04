import React from "react";
import "./Button.css";
import "../index.css";

const Button = (props) => {
  return (
    <div className="Button">
      <button style={{ backgroundColor: props.bgColor }}>
        <img
          src={props.imgUrl}
          alt={`${props.name} icon`}
        />
        <p className="CategoryButton" style={{ backgroundColor: props.bgColor2 }}>{props.name}</p>
      </button>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Button;
