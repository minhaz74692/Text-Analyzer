import React from "react";
import HeadImage from "./HeadIcon.png";

export default function Navbar(props) {
  return (
    <div
      className="sticky-top navbar-light bg-light"
      style={{ borderBottom: "1px solid gray" }}
    >
      <h1
        className="pt-1"
        style={{ fontFamily: "Comic Sans MS", textAlign: "center" }}
      >
        <img style={{ width: "45px" }} src={HeadImage}></img>
        <strong style={{ color: "red" }}>T</strong>ext{" "}
        <strong style={{ color: "red" }}>A</strong>nalyzer
      </h1>
    </div>
  );
}
