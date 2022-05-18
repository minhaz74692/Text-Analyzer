import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alerts from "./components/Alerts";

function App() {
  const [mode, setMode] = useState("light");

  //Alerts
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  //Mode
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-primary");
  };
  const handleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(50,50,50)";
      showAlert("dark mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        mode={mode}
        handleMode={handleMode}
      />
      <Alerts alert={alert} />

      <TextForm
        showAlert={showAlert}
        mode={mode}
        heading="Enter the text to analyse"
      />
      <About/>
    </>
  );
}
export default App;
