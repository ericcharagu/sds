import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cover from "./components/cover";
import React from "react";
import NavBar from "./components/nav";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <Router>
      <div className="App">
        <ParallaxProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Cover />}></Route>

            {/* <Route path="/about" element={<About />}></Route>
          <Route path="/archmodels" element={<Models />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/all-projects" element={<AllProjects />}></Route>
          <Route path="/building" element={<Building />}></Route> */}
          </Routes>
        </ParallaxProvider>
      </div>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
