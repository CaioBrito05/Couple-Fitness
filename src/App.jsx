import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Ranking from "./pages/Ranking.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  );
}

export default App;