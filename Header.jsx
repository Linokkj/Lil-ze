import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const refFilmes = useRef(null);

  const listaFilmes = [
    { id: "1", titulo: "Spider-Man", img: "https://m.media-amazon.com/images/S/pv-target-images/4398b4f69fe976eeb6cad4f48cf7a22c5280b245a0e832150e4ef4108c0c66bd.jpg" },
    { id: "2", titulo: "Planeta dos Macacos", img: "https://m.media-amazon.com/images/M/MV5BZjJkMTAxZGEtM2I2Yy00NjM5LThiZTMtNDEwZWU4MDRmNzNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: "3", titulo:"Piratas do Caribe", img:"https://cinema-em-cena.nyc3.cdn.digitaloceanspaces.com/reviews/886/vr6n6ZFUZvedvIlhfYcbCWcaKyW.jpg"},
    {id:"4",titulo:"Five Nights at Freddy's",img:"https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/1856/46d22a5f31d4977a391b2e1a8e9ebc21.jpg"},
    {id:"5",titulo:"Dragonball Evolution",img:"https://m.media-amazon.com/images/S/pv-target-images/b69848d551fce66e5645bf900631f26ffa8244523c9eaf070f27dcc57272f363.jpg"},
    {id:"6",titulo:"",img:""},
    {id:"7",titulo:"",img:""},
    {id:"8",titulo:"",img:""},
    {id:"9",titulo:"",img:""},
    {id:"10",titulo:"",img:""},
  ];

  const scroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="lista-filmes">
      <h1 className="titulo-filme">Filmes</h1>
      
      <div className="cw" style={{ display: 'flex', alignItems: 'center' }}>
        <button className="slider-button prev" onClick={() => scroll(refFilmes, 'left')}>&lt;</button>
        
        <div className="cf" ref={refFilmes} style={{ display: 'flex', overflowX: 'hidden' }}>
          {listaFilmes.map((filme) => (
            <Link key={filme.id} to={`/filme/${filme.id}`}>
              <img src={filme.img} alt={filme.titulo}/>
              <p>{filme.titulo}</p>
            </Link>
          ))}
        </div>
        
        <button className="slider-button next" onClick={() => scroll(refFilmes, 'right')}>&gt;</button>
      </div>
    </section>
  );
}

export default Header;