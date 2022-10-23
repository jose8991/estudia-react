function CardComponent({ title, img, AgregarAlCarrito }) {
// importamos nuestras variables de estado 
  return (
    <div className="card col-4">

      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{}</h5>
        <p className="card-text">{title}</p>
        <button
          className="btn btn-primary"
          onClick={(event) => AgregarAlCarrito(event, "toto")}
        >
   
        </button>
      </div>
    </div>
  );
}
export default CardComponent;
