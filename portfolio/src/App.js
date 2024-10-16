import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing Router and Routes for navigation
import "./Style.css"; // Importing global styles
import Home from "./components/Home";
import Cursor from "./custom/cursor";

function App() {
  return (
    <Router>
      <div className="App">
        <Cursor />
        {/* Routing setup with home route */}
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Default route set to Home component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
