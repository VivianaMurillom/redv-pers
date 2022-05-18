import './Header.css'
import logo from './icons/logo-redvin.svg'

function Header(){
    return(
        <header>
            <div className="header-logo">
                <img src={logo} className="logo" alt="logo" />
                <h1>Redvindicadas</h1>
            </div>
        </header>
    );
}

export default Header;