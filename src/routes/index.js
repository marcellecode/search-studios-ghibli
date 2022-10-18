import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filmes from "../pages/Filmes/filmes";
import Atores from "../pages/Atores/atores";
import Locais from "../pages/Locais/locais";

export default function Rotas() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/atores" element={<Atores />} />
          <Route path="/locais" element={<Locais />} />
        </Routes>
      </BrowserRouter>
    );
  }