import { useParams } from 'react-router-dom';

const series = [
  { id: "1", titulo: "Breaking Bad",
     sinopse: "Um professor de química diagnosticado com câncer terminal se une a um ex-aluno para fabricar metanfetamina.",
    imagemFundo: "https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg", Criador: "Vince Gilligan",
    Temporadas: "5",
    linkAssistir: "https://www.netflix.com/title/70143836" },
  { id: "2",
    titulo: "Stranger Things",
    sinopse: "Mistérios sobrenaturais e experimentos secretos em Hawkins.", imagemFundo: "https://images.alphacoders.com/669/669389.jpg",
    Criador: "Irmãos Duffer",
    Temporadas: "4", linkAssistir: "" },
  { id: "3",
    titulo: "The Boys",
    sinopse: "Um grupo de justiceiros tenta derrubar super-heróis corruptos.",
    imagemFundo: "https://images.alphacoders.com/109/1095593.jpg",
    Criador: "Eric Kripke", 
    Temporadas: "4",
    linkAssistir: "" },
  { id: "4",
     titulo: "Invencível", 
     sinopse: "Mark Grayson descobre que seu pai é o super-herói mais poderoso do planeta.",
    imagemFundo: "https://images.alphacoders.com/114/1142589.jpg", 
    Criador: "Robert Kirkman",
    Temporadas: "2",
    linkAssistir: "" },
  { id: "5",
    titulo: "The Walking Dead",
    sinopse: "Um grupo de sobreviventes luta em um mundo pós-apocalíptico infestado de zumbis.", imagemFundo: "https://images.alphacoders.com/837/837265.jpg",
    Criador: "Frank Darabont",
    Temporadas: "11",
    linkAssistir: "" },
  { id: "6",
    titulo: "Monange",
    sinopse: "Série dramática sobre relacionamentos.",
    imagemFundo: "https://images.alphacoders.com/123/1234567.jpg",
    Criador: "Desconhecido",
    Temporadas: "1",
    linkAssistir: "" },
  { id: "7",
    titulo: "Dexter",
    sinopse: "Um especialista em perícia criminal é também um serial killer que persegue criminosos.", imagemFundo: "https://images.alphacoders.com/112/1125298.jpg",
    Criador: "James Manos Jr.",
    Temporadas: "8",
    linkAssistir: "" },
  { id: "8",
    titulo: "You",
    sinopse: "Um gerente de livraria obcecado usa a tecnologia para conquistar as mulheres que ama.", imagemFundo: "https://images.alphacoders.com/978/978254.jpg",
    Criador: "Greg Berlanti",
    Temporadas: "4",
    linkAssistir: "" },
  { id: "9",
    titulo: "My Hero Academia",
    sinopse: "Em um mundo onde quase todos têm superpoderes, um garoto sem poderes busca se tornar um herói.",
    imagemFundo: "https://images.alphacoders.com/946/946351.jpg",
    Criador: "Kohei Horikoshi",
    Temporadas: "6",
    linkAssistir: "" },
  { id: "10",
    titulo: "Loki",
    sinopse: "O deus da trapaça vive aventuras através do tempo após os eventos de Vingadores: Ultimato.", imagemFundo: "https://images.alphacoders.com/112/1121087.jpg", Criador: "Michael Waldron", Temporadas: "2", linkAssistir: "" },
  { id: "11", titulo: "Better Call Saul", sinopse: "A transformação do advogado Jimmy McGill no infame Saul Goodman.", imagemFundo: "https://images.alphacoders.com/112/1126938.jpg", Criador: "Vince Gilligan", Temporadas: "6", linkAssistir: "" }
];

export default function Serie() {
  const { id } = useParams();
  const serie = series.find((s) => s.id === id);

  if (!serie) return <h2>Série não encontrada!</h2>;

  return (
    <div className="detalhe-container">
      <h1>{serie.titulo}</h1>
      <p>{serie.sinopse}</p>
      <p>Criador: {serie.Criador}</p>
      <p>Temporadas: {serie.Temporadas}</p>
      {serie.linkAssistir && <a href={serie.linkAssistir}>Assistir Agora</a>}
    </div>
  );
}