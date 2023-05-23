import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./assets/pages/Home";
import Profile from "./assets/pages/Profile";
import Navlink from "./assets/components/Navlink";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Router>
        <Navlink />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
