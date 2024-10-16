import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Style.css";
import Home from "./components/Home";
import Cursor from "./components/cursor";

function App() {
  return (
    <Router>
      <div className="App">
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
