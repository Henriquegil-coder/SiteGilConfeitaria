import './ProdutoFoto.css';

export default function ProdutoFoto({ nome, imagem, classePlaceholder }) {
  if (imagem) {
    return (
      <img
        className="produto-foto"
        src={imagem}
        alt={nome}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={classePlaceholder}
      aria-label={`Imagem de ${nome}`}
    ></div>
  );
}