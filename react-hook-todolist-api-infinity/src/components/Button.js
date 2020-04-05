import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.handleClick} className={`btn ${props.typeBtn} ${props.newAttrBtn}`}>
      {props.nameBtn}
    </button>
  );
};
export default Button;
