import React, { useState } from "react";
import "../css/buttons.css";

function Buttons({ buttonType, buttonText, clickFunction, buttonIcon, type }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseHover = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const renderButton = () => {
    switch (buttonType) {
      case "filledButton":
        return (
          <button
            className={`filledButton ${hovered ? "hovered" : "out"}`}
            onClick={clickFunction}
            onMouseOver={handleMouseHover}
            onMouseOut={handleMouseOut}
            type={type}
          >
            {buttonText}
            {buttonIcon}
          </button>
        );

      case "filledIcon":
        return (
          <button
            className={`filledIcon ${hovered ? "hovered" : "out"}`}
            onClick={clickFunction}
            onMouseOver={handleMouseHover}
            onMouseOut={handleMouseOut}
            type={type}
          >
            {buttonText}
            {buttonIcon}
          </button>
        );

      case "outlineButton":
        return (
          <button
            className={`outlineButton ${hovered ? "hovered" : "out"}`}
            onClick={clickFunction}
            onMouseOver={handleMouseHover}
            onMouseOut={handleMouseOut}
            type={type}
          >
            {buttonText}
            {buttonIcon}
          </button>
        );

      case "outlineIcon":
        return (
          <button
            className={`outlineIcon ${hovered ? "hovered" : "out"}`}
            onClick={clickFunction}
            onMouseOver={handleMouseHover}
            onMouseOut={handleMouseOut}
            type={type}
          >
            {buttonText}
            {buttonIcon}
          </button>
        );

      default:
        return null;
    }
  };

  return <div className="buttons">{renderButton()}</div>;
}

export default Buttons;
