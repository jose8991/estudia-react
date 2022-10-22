function CardComponent({title, img}){
    return (
        <div className="card col-4">
            <img className="card-img-top" src={img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{}</h5>
                <p className="card-text">{title}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
export default CardComponent;