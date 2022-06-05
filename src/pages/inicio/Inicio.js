import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Inicio.css';
import volcanicas from './img/logo-volcanicas.png';
import manifiesta from './img/logo-manifiesta.png';
import igualadas from './img/logo-igualadas.png';

function Inicio(){
    return(
       <div>
           <Header/>
           <Navbar/>

            <section className="home-banner">
                <p className="pink-title home-title">¡Nosotras<span className="white-title home-title"> hacemos </span> el cambio!</p>
            </section>

            <section className='presentacion'>
                <h1 className='title-presen'>¿Qué es <span>REDVINDICADAS</span>?</h1>
                <p>Es la propuesta académica del programa Tech Power de Kuepa Edutech en donde se busca visibiliar y exponer de manera didáctica y lúdica los conceptos de igualdad de género, feminismo y sexualidad sin tabú.</p>
                <div className='contacto-present'>
                    <p><span>Contáctenos:</span> correo ejemplo@gmail.com</p>
                </div>
            </section>

            <div className="information-home">
            <div className="vector">
                <h2>Infórmate más</h2>
            </div>

            <section className="info-home">
                <article className="cards-container">
                    <div className="home-cards card-border">
                        <h5>Volcánicas</h5>
                        <img className="logo-home-cards" src={volcanicas} alt=''/>
                        <div className="go-home">
                            <a href="https://volcanicas.com/" target="_blank"rel='noreferrer'><i className="fa-solid fa-circle-chevron-right fa-2x"></i></a>
                        </div>
                    </div>
                    <div className="home-cards card-border">
                        <h5>Manifiesta</h5>
                        <img className="logo-home-cards" src={manifiesta} alt=''/>
                        <div className="go-home">
                            <a href="https://manifiesta.org/" target="_blank" rel='noreferrer'><i className="fa-solid fa-circle-chevron-right fa-2x"></i></a>
                        </div>
                    </div>
                    <div className="home-cards card-border">
                        <h5>Las Igualadas</h5>
                        <img className="logo-home-cards" src={igualadas} alt=''/>
                        <div className="go-home">
                            <a href="https://www.youtube.com/c/LasIgualadas" target="_blank" rel='noreferrer'><i className="fa-solid fa-circle-chevron-right fa-2x"></i></a>
                        </div>
                    </div>
                </article>
            </section>
        </div>

           <Footer/>
       </div>
    );
}

export default Inicio;