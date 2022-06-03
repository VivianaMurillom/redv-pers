import cambios from './img/undraw_positive_attitude_orange.svg';
import eis from './img/undraw_super_thank_you_orange.svg';
import prevencion from './img/undraw_in_thought_orange.svg';
import  {Link}  from 'react-router-dom';
import './Submenuj.css';

function Submenuj(){
    return(
        <div class="contents-buttons">
            <Link to='/juega-aprende/jovenes1' className='item-sub'>
                <div class="cambios"> 
                    <a href="jovenes1.html">
                    <img src={cambios} alt="Imagen 1"/>
                    <p>Cambios</p>
                    </a>
                </div>
            </Link>
            <Link to='/juega-aprende/jovenes2' className='item-sub'>
                <div class="EIS">
                    <a href="jovenes2.html">
                    <img src={eis} alt="Imagen 2"/>
                    <p>EIS</p>
                    </a>
                </div>
            </Link>
            <Link to='/juega-aprende/jovenes3' className='item-sub'>
                <div class="Prevencion">
                    <a href="jovenes3.html">
                    <img src={prevencion} alt="Imagen 3"/>
                    <p>Prevención</p>
                    </a>
                </div>
            </Link>
            </div>
    );
}

export default Submenuj;