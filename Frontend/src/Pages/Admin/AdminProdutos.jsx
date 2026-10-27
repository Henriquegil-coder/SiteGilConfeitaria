import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {
  atualizarProduto,
  criarProduto,
  excluirProduto,
  formatarPreco,
  listarCategorias,
  listarProdutosAdmin,
  sair,
  SessaoExpiradaError,
} from '../../services/api';

import '../Artigos/EditarArtigo.css';
import './AdminProdutos.css';

const formularioVazio = {
  nome: '',
  categoriaId: '',
  preco: '',
  imagem: '',
  descricao: '',
  ativo: true,
};

// "45,00" -> 4500. Devolve null se o texto não for um preço válido.
function precoParaCentavos(texto) {
  const limpo = texto.replace(/[^\d.,]/g, '');

  if (!limpo) {
    return null;
  }

  const normalizado = limpo.includes(',')
    ? limpo.replace(/\./g, '').replace(',', '.')
    : limpo;

  const valor = Number(normalizado);

  if (!Number.isFinite(valor) || valor < 0) {
    return null;
  }

  return Math.round(valor * 100);
}

// 4500 -> "45,00"
function centavosParaTexto(centavos) {
  return (centavos / 100).toFixed(2).replace('.', ',');
}

export default function AdminProdutos() {
  const navigate = useNavigate();

  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [formulario, setFormulario] = useState(formularioVazio);
  const [editandoId, setEditandoId] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  function tratarErro(error) {
    if (error instanceof SessaoExpiradaError) {
      navigate('/admin', { replace: true });
      return;
    }

    setErro(error.message);
  }

  async function carregar() {
    try {
      const [listaProdutos, listaCategorias] = await Promise.all([
        listarProdutosAdmin(),
        listarCategorias(),
      ]);

      setProdutos(listaProdutos);
      setCategorias(listaCategorias);
    } catch (error) {
      tratarErro(error);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setMensagem('');
    setErro('');
  }

  function limparFormulario() {
    setFormulario(formularioVazio);
    setEditandoId(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setErro('');
    setMensagem('');

    const precoCentavos = precoParaCentavos(formulario.preco);

    if (precoCentavos === null) {
      setErro('Informe um preço válido, por exemplo 45,00.');
      return;
    }

    const dados = {
      nome: formulario.nome.trim(),
      descricao: formulario.descricao.trim(),
      precoCentavos,
      imagem: formulario.imagem.trim() || null,
      categoriaId: formulario.categoriaId
        ? Number(formulario.categoriaId)
        : null,
      ativo: formulario.ativo,
    };

    setSalvando(true);

    try {
      if (editandoId) {
        await atualizarProduto(editandoId, dados);
        setMensagem('Produto atualizado.');
      } else {
        await criarProduto(dados);
        setMensagem('Produto cadastrado.');
      }

      limparFormulario();
      await carregar();
    } catch (error) {
      tratarErro(error);
    } finally {
      setSalvando(false);
    }
  }

  function handleEditar(produto) {
    setEditandoId(produto.id);

    setFormulario({
      nome: produto.nome,
      categoriaId: produto.categoriaId ? String(produto.categoriaId) : '',
      preco: centavosParaTexto(produto.precoCentavos),
      imagem: produto.imagem || '',
      descricao: produto.descricao || '',
      ativo: produto.ativo,
    });

    setMensagem('');
    setErro('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleExcluir(produto) {
    const confirmado = window.confirm(
      `Excluir "${produto.nome}"? Essa ação não pode ser desfeita.`
    );

    if (!confirmado) {
      return;
    }

    setErro('');
    setMensagem('');

    try {
      await excluirProduto(produto.id);

      if (editandoId === produto.id) {
        limparFormulario();
      }

      setMensagem('Produto excluído.');
      await carregar();
    } catch (error) {
      tratarErro(error);
    }
  }

  function handleSair() {
    sair();
    navigate('/admin');
  }

  return (
    <div className="editar-artigo-page">
      <Header />

      <main className="editar-artigo-main">
        <div className="editar-artigo-topbar">
          <div>
            <p className="editar-artigo-eyebrow">
              Área administrativa
            </p>

            <h1>Produtos</h1>
          </div>

          <div className="admin-produtos-topbar-actions">
            <Link
              to="/admin/paginas"
              className="editar-artigo-back-link"
            >
              Páginas do site
            </Link>

            <Link
              to="/produtos"
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
          <h2 className="admin-produtos-titulo">
            {editandoId ? 'Editar produto' : 'Cadastrar produto'}
          </h2>

          <form
            className="editar-artigo-form"
            onSubmit={handleSubmit}
          >
            <div className="editar-artigo-form-row">
              <div className="editar-artigo-field">
                <label htmlFor="nome">
                  Nome do produto
                </label>

                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formulario.nome}
                  onChange={handleChange}
                  placeholder="Ex.: Bolo de cenoura"
                  required
                />
              </div>

              <div className="editar-artigo-field">
                <label htmlFor="categoriaId">
                  Categoria
                </label>

                <select
                  id="categoriaId"
                  name="categoriaId"
                  value={formulario.categoriaId}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Escolha uma categoria
                  </option>

                  {categorias.map((categoria) => (
                    <option
                      key={categoria.id}
                      value={categoria.id}
                    >
                      {categoria.nome}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="editar-artigo-form-row">
              <div className="editar-artigo-field">
                <label htmlFor="preco">
                  Preço (R$)
                </label>

                <input
                  id="preco"
                  name="preco"
                  type="text"
                  inputMode="decimal"
                  value={formulario.preco}
                  onChange={handleChange}
                  placeholder="Ex.: 45,00"
                  required
                />

                <small>
                  Use vírgula para os centavos. Preço 0 aparece
                  como "Consulte o valor".
                </small>
              </div>

              <div className="editar-artigo-field">
                <label htmlFor="imagem">
                  Foto (nome do arquivo)
                </label>

                <input
                  id="imagem"
                  name="imagem"
                  type="text"
                  value={formulario.imagem}
                  onChange={handleChange}
                  placeholder="Ex.: bolo-cenoura.png"
                />

                <small>
                  Coloque o arquivo na pasta
                  public/imagens-produtos do projeto e escreva o
                  nome aqui. Pode deixar em branco.
                </small>
              </div>
            </div>

            <div className="editar-artigo-field">
              <label htmlFor="descricao">
                Descrição
              </label>

              <textarea
                id="descricao"
                name="descricao"
                value={formulario.descricao}
                onChange={handleChange}
                placeholder="Ingredientes, tamanho, observações..."
              />
            </div>

            <label className="admin-produtos-checkbox">
              <input
                name="ativo"
                type="checkbox"
                checked={formulario.ativo}
                onChange={handleChange}
              />

              Exibir este produto no site
            </label>

            {erro && (
              <p className="admin-produtos-erro" role="alert">
                {erro}
              </p>
            )}

            {mensagem && (
              <p
                className="editar-artigo-success"
                role="status"
              >
                {mensagem}
              </p>
            )}

            <div className="editar-artigo-actions">
              {editandoId && (
                <button
                  type="button"
                  className="editar-artigo-preview-button"
                  onClick={limparFormulario}
                >
                  Cancelar edição
                </button>
              )}

              <button
                type="submit"
                className="editar-artigo-save-button"
                disabled={salvando}
              >
                {salvando
                  ? 'Salvando...'
                  : editandoId
                    ? 'Salvar alterações'
                    : 'Cadastrar produto'}
              </button>
            </div>
          </form>
        </section>

        <section className="editar-artigo-card admin-produtos-lista-card">
          <h2 className="admin-produtos-titulo">
            Produtos cadastrados
          </h2>

          {carregando && <p>Carregando...</p>}

          {!carregando && produtos.length === 0 && (
            <p>
              Nenhum produto cadastrado ainda. Enquanto a lista
              estiver vazia, o site mostra os produtos de exemplo.
            </p>
          )}

          <ul className="admin-produtos-lista">
            {produtos.map((produto) => (
              <li
                key={produto.id}
                className="admin-produtos-item"
              >
                <div>
                  <strong className="admin-produtos-nome">
                    {produto.nome}
                  </strong>

                  <span className="admin-produtos-detalhes">
                    {produto.categoria?.nome || 'Sem categoria'}
                    {' · '}
                    {formatarPreco(produto.precoCentavos)}
                    {!produto.ativo && (
                      <span className="admin-produtos-oculto">
                        Oculto no site
                      </span>
                    )}
                  </span>
                </div>

                <div className="admin-produtos-botoes">
                  <button
                    type="button"
                    className="admin-produtos-botao"
                    onClick={() => handleEditar(produto)}
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    className="admin-produtos-botao admin-produtos-botao-perigo"
                    onClick={() => handleExcluir(produto)}
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}