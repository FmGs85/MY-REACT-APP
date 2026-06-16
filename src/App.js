import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Curso from "./pages/Curso";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curso/:slug" element={<Curso />} />
    </Routes>
  );
}

export default App;
