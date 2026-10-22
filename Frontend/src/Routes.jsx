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
import AdminPaginas from './Pages/Admin/AdminPaginas';
import RotaProtegida from './Components/RotaProtegida/RotaProtegida';
import RotaVisivel from './Components/RotaVisivel/RotaVisivel';

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
        <Route
          path="/produtos/bolos"
          element={
            <RotaVisivel chave="bolos">
              <Bolos />
            </RotaVisivel>
          }
        />
        <Route
          path="/produtos/tortas"
          element={
            <RotaVisivel chave="tortas">
              <Tortas />
            </RotaVisivel>
          }
        />
        <Route
          path="/produtos/biscoitos"
          element={
            <RotaVisivel chave="biscoitos">
              <Biscoitos />
            </RotaVisivel>
          }
        />
        <Route
          path="/produtos/geleias"
          element={
            <RotaVisivel chave="geleias">
              <Geleias />
            </RotaVisivel>
          }
        />
        <Route
          path="/produtos/salgados"
          element={
            <RotaVisivel chave="salgados">
              <Salgados />
            </RotaVisivel>
          }
        />

        {/* Blog */}

        <Route
          path="/blog"
          element={
            <RotaVisivel chave="blog">
              <Blog />
            </RotaVisivel>
          }
        />
        <Route
          path="/blog/nossa-historia"
          element={
            <RotaVisivel chave="nossa-historia">
              <NossaHistoria />
            </RotaVisivel>
          }
        />
        <Route
          path="/blog/producao-artesanal"
          element={
            <RotaVisivel chave="producao-artesanal">
              <ProducaoArtesanal />
            </RotaVisivel>
          }
        />

        {/* Artigos */}

        <Route
          path="/blog/artigos"
          element={
            <RotaVisivel chave="artigos">
              <Artigos />
            </RotaVisivel>
          }
        />
        <Route
          path="/blog/artigos/novo"
          element={
            <RotaProtegida>
              <EditarArtigo />
            </RotaProtegida>
          }
        />
        <Route
          path="/blog/artigos/editar/:id"
          element={
            <RotaProtegida>
              <EditarArtigo />
            </RotaProtegida>
          }
        />
        <Route
          path="/blog/artigos/visualizar/:slug"
          element={
            <RotaVisivel chave="artigos">
              <VisualizarArtigo />
            </RotaVisivel>
          }
        />

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

        <Route
          path="/admin/paginas"
          element={
            <RotaProtegida>
              <AdminPaginas />
            </RotaProtegida>
          }
        />

        {/* Páginas institucionais */}

        <Route
          path="/contato"
          element={
            <RotaVisivel chave="contato">
              <Contato />
            </RotaVisivel>
          }
        />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route
          path="/trabalhe-conosco"
          element={
            <RotaVisivel chave="trabalhe-conosco">
              <TrabalheConosco />
            </RotaVisivel>
          }
        />
        <Route
          path="/redes-sociais"
          element={
            <RotaVisivel chave="redes-sociais">
              <RedesSociais />
            </RotaVisivel>
          }
        />

        {/* Página 404 — deve ser sempre a última rota */}

        <Route path="*" element={<NaoEncontrada />} />

      </Routes>
    </BrowserRouter>
  );
}