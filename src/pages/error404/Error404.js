import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import error from './imagen-error-404.png';
import './Error.css';

function Error404(){
    return(
       <div>
           <Header/>
           <Navbar/>
           <div className='contenedor-error'>
            <img src={error} alt='Imagen de error' className='imagen-error'/>
           </div>
           <Footer/>
       </div>
    );
}

export default Error404;