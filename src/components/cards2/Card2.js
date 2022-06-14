import './Card2.css';

function Card2(item){
    return(
        <div className="gradient-cardEdu">
            <div id="card-second" className="card-edu">
                <h3>{item.titulo}</h3>
                <p>{item.presentacion}</p>
                <div className="go">
                    <a href={item.enlace} target="_blank" rel='noreferrer'><i className="fa-solid fa-circle-chevron-right fa-3x naranja"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Card2;