import Header from '../../../../components/header/Header';
import Navbar from '../../../../components/navbar/Navbar';
import Footer from '../../../../components/footer/Footer';
import './Jovenes2.css';
import galleta from './img/imagen.png';
import Mmenujovenes from '../../../../components/main-menu-jovenes/Mmenujovenes';
import Submenuj from '../../../../components/sub-menu-jovenes/Submenuj';
import {getAllEducation} from '../../../../RecursosJovenes';
import Card2 from '../../../../components/cards2/Card2';

function Jovenes2(){

    const allEducation=getAllEducation();

    return(
       <div>
        <Header/>
        <Navbar/>
        <Mmenujovenes/>
        <Submenuj/>
        <section className="section-education">
            <div className="content-education"> 
                <h1>Educación Integral para la sexualidad</h1>
                <p>Por medio de la propuesta de educación integral para la sexualidad podemos enfocar conocimientos a este aspecto humano de manera concisa y con enfoque igualitario de género.
                </p>

                <div className="boxes-education">
                    <div className="boxes-content-education">

                        {
                            allEducation.map(itemsEdu=>(
                                <Card2
                                id={itemsEdu.id}
                                titulo={itemsEdu.titulo}
                                presentacion={itemsEdu.presentacion}
                                enlace={itemsEdu.enlace}
                                />
                            ))
                        }

                    </div>
                </div>
            </div>
            
            <div className="education-foot">&nbsp;</div>
        </section>

        <section className="section-complement">
            <h1>Información complementaria</h1>
            <h2>Diversidad afectivo-sexual y de género</h2>
            <img src={galleta} alt="Galleta de Jengibre"/>
            <p>Para ampliar la información referente al tema le invitamos a visitar:</p>
            <a href="https://steilas.eus/files/2015/05/GUIA-diversidad-sexual-y-genero.-STEILAS-2015.pdf" target="_blank" rel="noopener noreferrer">Tomado de STEILAS</a>
        </section>

        <div className="education-foot">&nbsp;</div>
        <Footer/>
       </div>
    );
}

export default Jovenes2;