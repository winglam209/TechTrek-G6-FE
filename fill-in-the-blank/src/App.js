import React from "react";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GroupFinder from "./pages/GroupFinder";
import IndexSwap from "./pages/IndexSwap";
import Forum from "./pages/Forum";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/indexSwap" element={<IndexSwap />} />
          <Route path="/groupFinder" element={<GroupFinder />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
