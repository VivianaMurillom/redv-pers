import './Navbar.css';
import  {Link}  from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <input type="checkbox" name="check-menu" id="check-menu" />
            <label for="check-menu" className="button-menu">
                <i className="fa-solid fa-bars fa-2xl"></i>
            </label>

            <ul class="nav-header"> 
                <li><Link to='/inicio' className='item'>Inicio</Link></li>
                <li><Link to='/juega-aprende' className='item'>Juega y Aprende</Link></li>
                <li><Link to='/oportunidades' className='item'>Oportunidades</Link></li>
                <li className="redes">Redes de apoyo
                    <ul className="redes-enlaces">
                        <li><Link to='/asociados' className='item'>Asociados</Link></li>
                        <li><Link to='/lineas-emergencia' className='item'>Líneas de emergencia</Link></li>
                    </ul>
                </li>
                <li><Link to='/kit-fem' className='item'>Kit Fem</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;