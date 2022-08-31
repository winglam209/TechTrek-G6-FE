import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "./firebase";

import ProtectedRoutes from "./components/ProectedRoutes";
import NavBar from "./components/layout/NavBar";
import Home from "./pages/Home";
import GroupFinder from "./pages/GroupFinder";
import IndexSwap from "./pages/IndexSwap";
import Forum from "./pages/Forum";
import Loader from "./components/Loader";

function App() {
  const [user, loading, error] = useAuthState(firebaseAuth);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/indexSwap" element={<IndexSwap />} />
              <Route path="/groupFinder" element={<GroupFinder />} />
              <Route path="/forum" element={<Forum />} />
            </Route>
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
