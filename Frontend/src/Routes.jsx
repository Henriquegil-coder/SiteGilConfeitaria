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
import EditarArtigo from './Pages/Artigos/EditarArtigo';
import VisualizarArtigo from './Pages/Artigos/VisualizarArtigo';

import AdminLogin from './Pages/Admin/Login';
import AdminProdutos from './Pages/Admin/AdminProdutos';
import RotaProtegida from './Components/RotaProtegida/RotaProtegida';

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
        <Route path="/produtos/bolos" element={<Bolos />} />
        <Route path="/produtos/tortas" element={<Tortas />} />
        <Route path="/produtos/biscoitos" element={<Biscoitos />} />
        <Route path="/produtos/geleias" element={<Geleias />} />
        <Route path="/produtos/salgados" element={<Salgados />} />

        {/* Blog */}

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/nossa-historia" element={<NossaHistoria />} />
        <Route path="/blog/producao-artesanal" element={<ProducaoArtesanal />} />

        {/* Artigos */}

        <Route path="/blog/artigos" element={<Artigos />} />
        <Route
          path="/blog/artigos/editar/:id"
          element={
            <RotaProtegida>
              <EditarArtigo />
            </RotaProtegida>
          }
        />
        <Route path="/blog/artigos/visualizar/:id" element={<VisualizarArtigo />} />

        {/* Administração */}

        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/produtos"
          element={
            <RotaProtegida>
              <AdminProdutos />
            </RotaProtegida>
          }
        />

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