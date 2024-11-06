import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing Router and Routes for navigation
import "./Style.css"; // Importing global styles
import Home from "./components/Home"; // Importing the Home component for the '/' route
import Cursor from "./custom/cursor"; // Importing the custom Cursor component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Custom cursor component */}
        <Cursor />

        {/* Routing setup with home route */}
        <Routes>
          {/* Default route set to Home component */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
