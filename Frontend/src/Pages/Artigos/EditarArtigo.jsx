import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './EditarArtigo.css';

const artigosIniciais = {
  1: {
    titulo: 'O cuidado por trás de cada criação',
    categoria: 'Nossa história',
    resumo:
      'Conheça um pouco mais sobre os valores e as escolhas que fazem parte da história da GIL Confeitaria.',
    autor: 'GIL Confeitaria',
    conteudo:
      'Na GIL Confeitaria, cada criação começa muito antes de chegar à mesa. Ela nasce da escolha cuidadosa dos ingredientes, do respeito pelo tempo de preparo e da atenção aos pequenos detalhes.\n\nAcreditamos que a confeitaria artesanal reúne técnica, memória e afeto. Por isso, nossas receitas são preparadas com cuidado, buscando valorizar sabores conhecidos e criar novas experiências.',
  },

  2: {
    titulo: 'A importância do tempo na confeitaria',
    categoria: 'Produção artesanal',
    resumo:
      'Descubra por que o tempo, a paciência e o cuidado são ingredientes importantes em uma produção artesanal.',
    autor: 'GIL Confeitaria',
    conteudo:
      'Em uma produção artesanal, o tempo não é apenas uma etapa do processo. Ele faz parte da receita e influencia diretamente o resultado final.\n\nRespeitar o tempo de cada preparo permite que os ingredientes desenvolvam suas características e que cada etapa seja realizada com mais precisão.',
  },

  3: {
    titulo: 'Como escolher um doce para cada ocasião',
    categoria: 'Artigos',
    resumo:
      'Algumas ideias para escolher doces e sobremesas de acordo com o momento que você deseja celebrar.',
    autor: 'GIL Confeitaria',
    conteudo:
      'Escolher um doce para uma ocasião especial pode ser uma forma carinhosa de demonstrar atenção. O sabor, o tamanho e a apresentação ajudam a criar a atmosfera desejada.\n\nMais do que escolher um produto, trata-se de escolher uma experiência para compartilhar.',
  },
};

const artigoPadrao = {
  titulo: '',
  categoria: 'Artigos',
  resumo: '',
  autor: 'GIL Confeitaria',
  conteudo: '',
};

export default function EditarArtigo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const artigoInicial = artigosIniciais[id] || artigoPadrao;

  const [formulario, setFormulario] = useState(artigoInicial);
  const [mensagem, setMensagem] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormulario((estadoAnterior) => ({
      ...estadoAnterior,
      [name]: value,
    }));

    setMensagem('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    setMensagem(
      'Alterações salvas apenas nesta demonstração visual.'
    );
  }

  function handleVisualizar() {
    navigate(`/blog/artigos/visualizar/${id}`);
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

            <h1>Editar artigo</h1>
          </div>

          <Link
            to="/blog/artigos"
            className="editar-artigo-back-link"
          >
            Voltar para artigos
          </Link>
        </div>

        <section className="editar-artigo-card">
          <form
            className="editar-artigo-form"
            onSubmit={handleSubmit}
          >
            <div className="editar-artigo-form-row">
              <div className="editar-artigo-field">
                <label htmlFor="titulo">
                  Título do artigo
                </label>

                <input
                  id="titulo"
                  name="titulo"
                  type="text"
                  value={formulario.titulo}
                  onChange={handleChange}
                  placeholder="Digite o título do artigo"
                  required
                />
              </div>

              <div className="editar-artigo-field">
                <label htmlFor="categoria">
                  Categoria
                </label>

                <select
                  id="categoria"
                  name="categoria"
                  value={formulario.categoria}
                  onChange={handleChange}
                  required
                >
                  <option value="Nossa história">
                    Nossa história
                  </option>

                  <option value="Produção artesanal">
                    Produção artesanal
                  </option>

                  <option value="Artigos">
                    Artigos
                  </option>
                </select>
              </div>
            </div>

            <div className="editar-artigo-form-row">
              <div className="editar-artigo-field">
                <label htmlFor="autor">
                  Autor
                </label>

                <input
                  id="autor"
                  name="autor"
                  type="text"
                  value={formulario.autor}
                  onChange={handleChange}
                  placeholder="Digite o nome do autor"
                  required
                />
              </div>

              <div className="editar-artigo-field">
                <label htmlFor="imagem">
                  Imagem de capa
                </label>

                <input
                  id="imagem"
                  name="imagem"
                  type="text"
                  value={formulario.imagem || ''}
                  onChange={handleChange}
                  placeholder="Nome ou caminho da imagem"
                />
              </div>
            </div>

            <div className="editar-artigo-field">
              <label htmlFor="resumo">
                Resumo
              </label>

              <textarea
                id="resumo"
                name="resumo"
                value={formulario.resumo}
                onChange={handleChange}
                placeholder="Digite um resumo para o artigo"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="editar-artigo-field">
              <label htmlFor="conteudo">
                Conteúdo do artigo
              </label>

              <textarea
                id="conteudo"
                name="conteudo"
                value={formulario.conteudo}
                onChange={handleChange}
                placeholder="Digite o conteúdo completo do artigo"
                rows="14"
                required
              ></textarea>

              <small>
                Separe os parágrafos usando uma linha em branco.
              </small>
            </div>

            {mensagem && (
              <p
                className="editar-artigo-success"
                role="status"
              >
                {mensagem}
              </p>
            )}

            <div className="editar-artigo-actions">
              <button
                type="button"
                className="editar-artigo-preview-button"
                onClick={handleVisualizar}
              >
                Visualizar artigo
              </button>

              <button
                type="submit"
                className="editar-artigo-save-button"
              >
                Salvar alterações
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
