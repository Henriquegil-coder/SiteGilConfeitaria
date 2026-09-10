import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Produtos from './Pages/Produtos/Produtos';
import Bolos from './Pages/Bolos/Bolos';
import Tortas from './Pages/Tortas/Tortas';
import Biscoitos from './Pages/Biscoitos/Biscoitos';
import Geleias from './Pages/Geleias/Geleias';
import Salgados from './Pages/Salgados/Salgados';
import Blog from './Pages/Blog/Blog';
import NossaHistoria from './Pages/NossaHistoria/NossaHistoria';
import ProducaoArtesanal from './Pages/ProducaoArtesanal/ProducaoArtesanal';
import Artigos from './Pages/Artigos/Artigos';  

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/bolos" element={<Bolos />} />
        <Route path="/produtos/tortas" element={<Tortas />} />
        <Route path="/produtos/biscoitos" element={<Biscoitos />} />
        <Route path="/produtos/geleias" element={<Geleias />} />
        <Route path="/produtos/salgados" element={<Salgados />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/nossa-historia" element={<NossaHistoria />} />
        <Route path="/blog/producao-artesanal" element={<ProducaoArtesanal />} />
        <Route path="/blog/artigos" element={<Artigos />} />

      </Routes>
    </BrowserRouter>
  );
}
