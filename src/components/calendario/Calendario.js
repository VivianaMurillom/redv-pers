import {Carousel} from 'react-bootstrap';
import {getAllCalendario} from '../../RecursosHome';
import './Calendario.css';
import calendario from './fondo-calendario.png';

function Calendario(){

    const allCalendario=getAllCalendario();

    return(
        <Carousel className='calendario-mes'>
            {
                allCalendario.map(itemsCalenda=>(
                <Carousel.Item className='todo-contenido'>
                    <h2>{itemsCalenda.mes}</h2>
                    <img
                    className="d-block w-100 imagen-fondo"
                    src={calendario}
                    alt='Fondo del calendario'
                    />
                    <Carousel.Caption className='calendario-background'>
                        <h3>{itemsCalenda.nombre}</h3>
                        <div className='contenido-calendario'>
                            <img
                            className='imagen-mes'
                            src={itemsCalenda.imagen}
                            alt={itemsCalenda.nombre}
                            />
                            <div className='texto-mes'>
                                <p className='descripcion'>{itemsCalenda.descripcion}</p>
                                <a href={itemsCalenda.invitacion} target="_blank" rel='noreferrer'>Te invitamos a leer más en inglés: {itemsCalenda.mes}</a>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default Calendario;