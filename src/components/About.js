import React, { useState } from "react";

export default function About() {
  return (
    <>
      <div className="bg-dark m-0" style={{ width: "100%" }}>
        <h1
          className="text-light pt-4"
          style={{ fontSize: "2rem", textAlign: "center" }}
        >
          <strong style={{ color: "red" }}>T</strong>ext{" "}
          <strong style={{ color: "red" }}>A</strong>nalyzer
        </h1>

        <p className="text-light px-4 pb-3 px-lg-5" style={{ textAlign: "justify" }}>
          Apart from counting words and characters, our online editor can help
          you to check word count, simply place your cursor into the text box
          above and start typing. You'll see the number of characters and words
          increase or decrease as you type, delete, and edit them. You can
          remove extra spaces and also copy and paste text from another program
          over into the online editor above.
        </p>
      </div>
    </>
  );
}
