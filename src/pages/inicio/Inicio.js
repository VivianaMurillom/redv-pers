import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Inicio.css';
import calendario from './img/imgcalendario.png';
import {getAllCards} from '../../RecursosHome';
import CardsInicio from '../../components/cardsinicio/CardsInicio';
import Calendario from '../../components/calendario/Calendario';

function Inicio(){

    const allCards=getAllCards();

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
                    <p><span>Contáctenos:</span> redvindicadas@gmail.com</p>
                </div>
            </section>

            <section className='calendario-section'>
                <h1>Calendario</h1>
                <p>Para brindarte información de acontecimientos importantes como celebraciones, personajes importantes, o actividades a
			realizar...</p>
                <div className='nuevo-calendario'>
                    <div className='nuevo-contenido'>
                        <Calendario/>
                        <div className='calendario-imagen'>
                            <img src={calendario} alt='Imagen de calendario mujeres'/>
                        </div>
                    </div>
                </div>
            </section>

            <div className="information-home">
            <div className="vector">
                <h2>Infórmate más</h2>
            </div>

            <section className="info-home">
                <article className="cards-container">

                    {
                        allCards.map(itemsCards=>(
                            <CardsInicio
                            id={itemsCards.id}
                            titulo={itemsCards.titulo}
                            imagen={itemsCards.imagen}
                            enlace={itemsCards.enlace}
                            />
                        ))
                    }
                </article>
            </section>
        </div>

           <Footer/>
       </div>
    );
}

export default Inicio;