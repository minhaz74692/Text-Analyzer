import React, { useState } from "react";
import "./Style.css";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Changed");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    // console.log("Changed");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearText = () => {
    // console.log("Changed");
    let newText1 = "";
    setText(newText1);
    props.showAlert("Cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let spaceText = text.split(/[ ]+/);
    setText(spaceText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div className="container mt-4 mt-lg-4">
        <p
          className="p-0 m-0"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "navy",
            fontFamily: "Consolas",
          }}
        >
          Total Words:{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          .
        </p>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "navy",
            fontFamily: "Consolas",
          }}
        >
          Total Characters: {text.length}.
        </p>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(80,80,80)",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="3"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="d-lg-flex d-md-flex">
          <button
            disabled={text.length === 0}
            className="btn btn-dark m-2"
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-dark m-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-dark m-2"
            onClick={handleLoClick}
          >
            Convert to LowerCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-danger m-2"
            onClick={handleClearText}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-dark m-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>

      <div
        className={`container my-2 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <div
          className="container py-1"
          style={{
            backgroundColor: "rgb(243, 243, 108)",
            borderRadius: "10px",
          }}
        >
          <h1
            style={{ color: "navy", textAlign: "center", fontStyle: "italic" }}
          >
            Your Text Summery:
          </h1>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(/\s+/).filter((elements) => {
                return elements.length !== 0;
              }).length}{" "}
            minutes time to read
          </p>
        </div>
        <div
          className="container py-1 my-2"
          style={{
            backgroundColor: "rgb(243, 243, 108)",
            borderRadius: "10px",
          }}
        >
          <h1
            style={{ color: "navy", textAlign: "center", fontStyle: "italic" }}
          >
            Preview Text:
          </h1>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the text box above to preview it here!"}
          </p>
        </div>
      </div>
    </>
  );
}
