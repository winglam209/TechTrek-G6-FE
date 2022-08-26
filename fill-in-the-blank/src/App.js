import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./components/ProectedRoutes";
import { AuthProvider } from "./context/authContext";

import NavBar from "./components/layout/NavBar";
import Home from "./pages/Home";
import GroupFinder from "./pages/GroupFinder";
import IndexSwap from "./pages/IndexSwap";
import Forum from "./pages/Forum";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/indexSwap" element={<IndexSwap />} />
            <Route path="/groupFinder" element={<GroupFinder />} />
            <Route path="/forum" element={<Forum />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
