import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [mode, setDarkMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  };
  return (
    <>
    <div className="container">
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Routes>
          <Route exact path="/" element={<Textform mode={mode}/>}/>
          <Route exact path="/About" element={<About text="About"/>}/>
        </Routes>
      </Router>
      </div>
    </>
  );
}
// things in {}are treated as javasctipt see line nyumber 14
// we can also use objects and import images in this file

// className based componets and function based components
// Function based componenct write a function and written jsx(jsx is a mixture of javascript and html)
// react use camel case

// Types of Props
export default App;
