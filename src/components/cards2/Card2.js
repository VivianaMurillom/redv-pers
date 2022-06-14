

function Card2(item){
    return(
        <div className="gradient">
            <div id="card-second" className="gradient-card">
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