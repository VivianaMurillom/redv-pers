import './Footer.css';
import logo from '../../icons/logo-redvin.svg';
import techP from '../../icons/tech_power.png';

function Footer() {
    return (
        <footer>
        <div className="foot-email">
            <img src={logo} className="logo" alt="logo"/>
            <h1>Redvindicadas</h1>
            <p>redvindicadas@gmail.com</p>
            </div>

        <div className="foot-developers">
            <h3>Diseño por devs de Kuepa</h3>
            <ul className="foot-developers-list">
                <div className="list-section">
                    <li><a href='https://github.com/dtaal' target="_blank" rel='noreferrer'>Daniela Tarazona @</a></li>
                    <li><a href='https://github.com/DannaSanchez' target="_blank" rel='noreferrer'>Danna Sanchez @</a></li>
                    {/* <li>Laura Castro @</li> */}
                </div>
                <div className="list-section">
                    <li><a href='https://github.com/ricoththth' target="_blank" rel='noreferrer'>Lizeth Rico @</a></li>
                    <li><a href='https://github.com/VivianaMurillom' target="_blank" rel='noreferrer'>Viviana Murillo @</a></li>
                </div>
            </ul>
        </div>

        <div className="foot-tech-power">
            <h3>Tech Power<br />Creando tu futuro</h3>
            <img src={techP} className="techP" alt="Imagen Tech Power"/>
        </div>
    </footer>
    );
  }

  export default Footer;