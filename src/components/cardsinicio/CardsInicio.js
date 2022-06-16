import './CardsInicio.css';

function CardsInicio(items){

    const cargarImagen = require.context("../../img-home/", true);

    return(
        <div className="home-cards card-border">
            <h3>{items.titulo}</h3>
            <img src={cargarImagen(`./${items.imagen}.png`)} alt={items.imagen}/>
            <div className="go-cards">
                <a href={items.enlace} target="_blank" rel='noreferrer'><i className="fa-solid fa-circle-chevron-right fa-3x naranja"></i></a>
            </div>
        </div>
    )
}

export default CardsInicio;