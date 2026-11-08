import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';

import Produtos from './Pages/Produtos/Produtos';
import Categoria from './Pages/Categoria/Categoria';

import Blog from './Pages/Blog/Blog';
import NossaHistoria from './Pages/NossaHistoria/NossaHistoria';
import ProducaoArtesanal from './Pages/ProducaoArtesanal/ProducaoArtesanal';

import Artigos from './Pages/Artigos/Artigos';
import VisualizarArtigo from './Pages/Artigos/VisualizarArtigo';

import Contato from './Pages/Contato/Contato';
import PoliticaPrivacidade from './Pages/PoliticaPrivacidade/PoliticaPrivacidade';
import TrabalheConosco from './Pages/TrabalheConosco/TrabalheConosco';
import RedesSociais from './Pages/RedesSociais/RedesSociais';

import NaoEncontrada from './Pages/Error/NaoEncontrada';

export function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}

        <Route path="/" element={<Home />} />

        {/* Produtos */}

        <Route path="/produtos" element={<Produtos />} />
        {/* Uma página para todas as categorias do cardápio (src/data/produtos.js) */}
        <Route path="/produtos/:slug" element={<Categoria />} />

        {/* Blog */}

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/nossa-historia" element={<NossaHistoria />} />
        <Route path="/blog/producao-artesanal" element={<ProducaoArtesanal />} />

        {/* Artigos */}

        <Route path="/blog/artigos" element={<Artigos />} />
        <Route path="/blog/artigos/visualizar/:id" element={<VisualizarArtigo />} />

        {/* Páginas institucionais */}

        <Route path="/contato" element={<Contato />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
        <Route path="/redes-sociais" element={<RedesSociais />} />

        {/* Página 404 — deve ser sempre a última rota */}

        <Route path="*" element={<NaoEncontrada />} />

      </Routes>
    </BrowserRouter>
  );
}