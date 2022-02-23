import React from "react";

function Hello(props) {
  console.log(props);
  return (
    <div
      style={{
        color: props.color,
      }}
    >
      {props.isSpecial ? <b>*</b> : null}
      hi there?! {props.name}
    </div>
  );
}

export default Hello;
