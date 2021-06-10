import React from "react";
import "./style.css";

function Wrapper(props) {
  console.log('wrapper returned')
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
