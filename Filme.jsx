import { useParams } from 'react-router-dom';

const filmes = [
  { 
    id: "1", 
    titulo: "Spider-Man", 
    sinopse: "Após ser picado por uma aranha geneticamente modificada, o tímido adolescente Peter Parker ganha poderes e se torna o super-herói Homem-Aranha, devendo enfrentar um inimigo vingativo conhecido como Duende Verde.", 
    imagemFundo: "https://m.media-amazon.com/images/M/MV5BNzE5NTk5NDQ0NV5BMl5BanBnXkFtZTgwNjU3ODIxMjI@._V1_.jpg", 
    Direção: "Sam Raimi",
    Roteiristas: "Stan LeeSteve DitkoDavid Koepp",
    linkAssistir: "https://www.tokyvideo.com/br/video/homem-aranha-completo-dublado-em-portugues-pt-br" 
  },
  { id: "2",
    titulo: "Planeta Dos Macacos",
    sinopse: "César e seus macacos são forçados a entrar em confronto com uma milícia de humanos. Mas após sofrer perdas inimagináveis, César resolve se vingar em um confronto final que irá determinar o futuro do planeta.",
    imagemFundo: "https://cinemaweb.com.br/wp-content/uploads/2024/01/planeta-dos-macacos-ordem-correta-para-assistir.jpg",
    Direção: "Matt Reeves",
    Roteiristas: "Mark BombackMatt ReevesRick Jaffa",
    linkAssistir: ""
  },
  { id: "3",
    titulo: "Piratas do Caribe: A Maldição do Pérola Negra",
    sinopse: "O ferreiro Will Turner se une ao excêntrico pirata Capitão Jack Sparrow para salvar Elizabeth Swann, a filha do governador e seu amor, dos ex-aliados piratas de Jack, que agora são mortos-vivos.",
    imagemFundo: "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/3938/f16d5b6bfb308f832c2ee4ffef8734b3.jpg",
    Direção: "Gore Verbinski",
    Roteiristas: "Johnny DeppGeoffrey RushOrlando Bloom",
    linkAssistir: ""
  },
  { id: "4",
    titulo: "Five Nights at Freddy's - O Pesadelo Sem Fim",
    sinopse: "Uma segurança problemática começa a trabalhar na Freddy Fazbear's Pizza. Durante suas cinco noites no trabalho, ele percebe que algo está errado com a pizzaria e logo descobre a verdade sobre os animatrônicos do lugar.",
    imagemFundo: "https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQ4DmWXmdGHotQqZ2odVIEtB4oyEUPheEZVXtqGpfZHO5x5t_bLrzh5H94MhrC7Ds5nAehVmHdXC0aJ72S-tE9MYXEYVYhDrw_sB.jpg?r=6ac",
    Direção: "Emma Tammi",
    Roteiristas: "Scott CawthonSeth CuddebackEmma Tammi",
    linkAssistir: ""},
    { id: "5",
    titulo: "Dragonball Evolution",
    sinopse: "O jovem guerreiro Son Goku parte em uma missão, correndo contra o tempo e o vingativo Rei Piccolo, para coletar um conjunto de sete esferas mágicas que concedem ao seu portador poder ilimitado.",
    imagemFundo: "https://images5.alphacoders.com/726/thumb-1920-726147.png",
    Direção: "James Wong",
    Roteiristas: "Ben RamseyAkira Toriyama",
    linkAssistir: ""},
    { id: "6",
    titulo: "",
    sinopse: "",
    imagemFundo: "",
    Direção: "",
    Roteiristas: "",
    linkAssistir: ""},
    { id: "7",
    titulo: "",
    sinopse: "",
    imagemFundo: "",
    Direção: "",
    Roteiristas: "",
    linkAssistir: ""},
    { id: "8",
    titulo: "",
    sinopse: "",
    imagemFundo: "",
    Direção: "",
    Roteiristas: "",
    linkAssistir: ""},
    { id: "9",
    titulo: "",
    sinopse: "",
    imagemFundo: "",
    Direção: "",
    Roteiristas: "",
    linkAssistir: ""},
    { id: "10",
    titulo: "",
    sinopse: "",
    imagemFundo: "",
    Direção: "",
    Roteiristas: "",
    linkAssistir: ""},  
];

export default function Filme() {
  const { id } = useParams();
  const filme = filmes.find((f) => f.id === id);

  if (!filme) return <h2 style={{color:'white'}}>Filme não encontrado!</h2>;

  return (
    <div className="detalhe-container" style={{ backgroundImage: `url(${filme.imagemFundo})` }}>
      <div className="conteudo">
        <h1>{filme.titulo}</h1>
        
        <div className="botoes">
          
          <a 
            href={filme.linkAssistir} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-assistir"
          >
            Assistir Agora
          </a>
        </div>

        <p className="sinopse">{filme.sinopse}</p>
        <p className="Direção">Direção:{filme.Direção}</p>
        <p className="Roteiristas">Roteiristas:{filme.Roteiristas} </p>
        
      </div>
    </div>
  );
}