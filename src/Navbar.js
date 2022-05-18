import './Navbar.css'

function Navbar(){
    return(
        <nav>
            <input type="checkbox" name="check-menu" id="check-menu" />
            <label for="check-menu" class="button-menu">
                <i class="fa-solid fa-bars fa-2xl"></i>
            </label>

            <ul class="nav-header"> 
                <li><a href="home.html">Inicio</a></li>
                <li><a href="juega-y-aprende/juega-y-aprende.html">Juega y Aprende</a></li>
                <li><a href="Estudios/estudios.html">Oportunidades</a></li>
                <li class="redes">Redes de apoyo
                    <ul class="redes-enlaces">
                        <li><a href="asociados.html">Asociados</a></li>
                        <li><a href="emergencias.html">Líneas de emergencia</a></li>
                    </ul>
                </li>
                <li><a href="kitfem/arengas.html">Kit Fem</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;