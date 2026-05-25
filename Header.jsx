import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const refFilmes = useRef(null);
  const refSeries = useRef(null);

  const listaFilmes = [
    { id: "1", titulo: "Spider-Man", img: "https://m.media-amazon.com/images/S/pv-target-images/4398b4f69fe976eeb6cad4f48cf7a22c5280b245a0e832150e4ef4108c0c66bd.jpg" },
    { id: "2", titulo: "Planeta dos Macacos", img: "https://m.media-amazon.com/images/M/MV5BZjJkMTAxZGEtM2I2Yy00NjM5LThiZTMtNDEwZWU4MDRmNzNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: "3", titulo:"Piratas do Caribe", img:"https://cinema-em-cena.nyc3.cdn.digitaloceanspaces.com/reviews/886/vr6n6ZFUZvedvIlhfYcbCWcaKyW.jpg"},
    {id:"4",titulo:"Five Nights at Freddy's",img:"https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/1856/46d22a5f31d4977a391b2e1a8e9ebc21.jpg"},
    {id:"5",titulo:"Dragonball Evolution",img:"https://m.media-amazon.com/images/S/pv-target-images/b69848d551fce66e5645bf900631f26ffa8244523c9eaf070f27dcc57272f363.jpg"},
    {id:"6",titulo:"O Menino do Pijama Listrado",img:"https://br.web.img2.acsta.net/c_640_360/img/10/a3/10a398cb098a7a752b7197c2d494c951.jpg"},
    {id:"7",titulo:"Chainsaw Man - O Filme: Arco da Reze",img:"https://www.planocritico.com/wp-content/uploads/2025/10/chainsaw-man-filme-reze-plano-critico.jpg"},
    {id:"8",titulo:"Jurassic Park: O Parque dos Dinossauros",img:"https://upload.wikimedia.org/wikipedia/pt/b/bc/Jurassic_Park_logo.png"},
    {id:"9",titulo:"Vingadores: Ultimato",img:"https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/4632/ef9e971e0582d0e846485a24b78f1b73.jpg"},
    {id:"10",titulo:"Super Mario Bros.: O Filme",img:"https://rollingstone.com.br/wp-content/uploads/2025/09/Sequencia-de-Super-Mario-Bros.-O-Filme-ganha-titulo-e-data-de-estreia-1.jpg"},
    {id:"11",titulo:"O Segredo dos Animais",img:"https://http2.mlstatic.com/D_NQ_NP_751137-MLA73368651374_122023-B.webp"}
  ];
  const series = [
    {id:"1",titulo:"Breaking Bad",img:"https://static.wikia.nocookie.net/assista-series/images/5/56/Breaking-Bad.jpg/revision/latest/scale-to-width-down/1200?cb=20150528205254&path-prefix=pt-br"},
    {id:"2",titulo:"",img:""},
    {id:"3",titulo:"",img:""},
    {id:"4",titulo:"",img:""},
    {id:"5",titulo:"",img:""},
    {id:"6",titulo:"",img:""},
    {id:"7",titulo:"",img:""},
    {id:"8",titulo:"",img:""},
    {id:"9",titulo:"",img:""},
    {id:"10",titulo:"",img:""},
    {id:"11",titulo:"",img:""},
]

  const scroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section>
    <section className="lista-filmes">
      <h1 className="titulo-filme">Filmes</h1>
      
      <div className="cw" style={{ display: 'flex', alignItems: 'center' }}>
        <button className="slider-botao prev" onClick={() => scroll(refFilmes, 'left')}>&lt;</button>
        
        <div className="cf" ref={refFilmes} style={{ display: 'flex', overflowX: 'hidden' }}>
          {listaFilmes.map((filme) => (
            <Link key={filme.id} to={`/filme/${filme.id}`}>
              <img src={filme.img} alt={filme.titulo}/>
              <p>{filme.titulo}</p>
            </Link>
          ))}
        </div>
        
        <button className="slider-botao next" onClick={() => scroll(refFilmes, 'right')}>&gt;</button>
      </div>
    </section>

    <section className="lista-series">
      <h1 className="titulo-series">Series</h1>
      
      <div className="cw" style={{ display: 'flex', alignItems: 'center' }}>
        <button className="slide-botao prev" onClick={() => scroll(refSeries, 'left')}>&lt;</button>
        
        <div className="cf" ref={refSeries} style={{ display: 'flex', overflowX: 'hidden' }}>
          {series.map((series) => (
            <Link key={series.id} to={`/series/${series.id}`}>
              <img src={series.img} alt={series.titulo}/>
              <p>{series.titulo}</p>
            </Link>
          ))}
        </div>
        
        <button className="slide-botao next" onClick={() => scroll(refSeries, 'right')}>&gt;</button>
      </div>
    </section>
    </section>
  );
}

export default Header;