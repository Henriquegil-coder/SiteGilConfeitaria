import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {
  alterarPagina,
  listarPaginas,
  sair,
  SessaoExpiradaError,
} from '../../services/api';
import { usePaginas } from '../../services/paginas';

import '../Artigos/EditarArtigo.css';
import './AdminProdutos.css';
import './AdminPaginas.css';

const dicas = {
  Blog: 'Ocultar o Blog também oculta Nossa história, Produção artesanal e Artigos.',
};

export default function AdminPaginas() {
  const navigate = useNavigate();
  const { atualizar } = usePaginas();

  const [paginas, setPaginas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState('');
  const [erro, setErro] = useState('');

  function tratarErro(error) {
    if (error instanceof SessaoExpiradaError) {
      navigate('/admin', { replace: true });
      return;
    }

    setErro(error.message);
  }

  useEffect(() => {
    let ativo = true;

    listarPaginas()
      .then((lista) => {
        if (ativo) {
          setPaginas(lista);
        }
      })
      .catch((error) => {
        if (ativo) {
          tratarErro(error);
        }
      })
      .finally(() => {
        if (ativo) {
          setCarregando(false);
        }
      });

    return () => {
      ativo = false;
    };
  }, []);

  async function handleAlternar(pagina) {
    const novoValor = !pagina.visivel;

    setErro('');
    setSalvando(pagina.chave);

    try {
      await alterarPagina(pagina.chave, novoValor);

      setPaginas((anterior) =>
        anterior.map((item) =>
          item.chave === pagina.chave
            ? { ...item, visivel: novoValor }
            : item
        )
      );

      // Faz o menu e o rodapé refletirem a mudança na hora.
      await atualizar();
    } catch (error) {
      tratarErro(error);
    } finally {
      setSalvando('');
    }
  }

  function handleSair() {
    sair();
    navigate('/admin');
  }

  const grupos = [...new Set(paginas.map((pagina) => pagina.grupo))];

  return (
    <div className="editar-artigo-page">
      <Header />

      <main className="editar-artigo-main">
        <div className="editar-artigo-topbar">
          <div>
            <p className="editar-artigo-eyebrow">
              Área administrativa
            </p>

            <h1>Páginas do site</h1>
          </div>

          <div className="admin-produtos-topbar-actions">
            <Link
              to="/admin/produtos"
              className="editar-artigo-back-link"
            >
              Produtos
            </Link>

            <Link
              to="/"
              className="editar-artigo-back-link"
            >
              Ver o site
            </Link>

            <button
              type="button"
              className="admin-produtos-sair"
              onClick={handleSair}
            >
              Sair
            </button>
          </div>
        </div>

        <section className="editar-artigo-card">
          <p className="admin-paginas-intro">
            Uma página oculta some do menu, do rodapé e dos botões, e
            deixa de abrir para os visitantes. Você, logado, continua
            vendo as páginas ocultas, com um aviso no topo.
          </p>

          {erro && (
            <p className="admin-produtos-erro" role="alert">
              {erro}
            </p>
          )}

          {carregando && <p>Carregando...</p>}

          {grupos.map((grupo) => (
            <div className="admin-paginas-grupo" key={grupo}>
              <h2 className="admin-produtos-titulo">
                {grupo}
              </h2>

              {dicas[grupo] && (
                <p className="admin-paginas-dica">
                  {dicas[grupo]}
                </p>
              )}

              <ul className="admin-paginas-lista">
                {paginas
                  .filter((pagina) => pagina.grupo === grupo)
                  .map((pagina) => (
                    <li
                      className="admin-paginas-item"
                      key={pagina.chave}
                    >
                      <div>
                        <strong className="admin-paginas-nome">
                          {pagina.nome}
                        </strong>

                        <span className="admin-paginas-estado">
                          {pagina.visivel
                            ? 'Visível no site'
                            : 'Oculta'}
                        </span>
                      </div>

                      <button
                        type="button"
                        role="switch"
                        aria-checked={pagina.visivel}
                        aria-label={`Exibir ${pagina.nome} no site`}
                        className={`admin-paginas-switch ${
                          pagina.visivel ? 'is-on' : ''
                        }`}
                        disabled={salvando === pagina.chave}
                        onClick={() => handleAlternar(pagina)}
                      >
                        <span className="admin-paginas-switch-bolinha"></span>
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}