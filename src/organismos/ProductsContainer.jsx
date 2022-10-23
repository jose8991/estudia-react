//impostamos useState para poder alterar o estado do componente
import CardComponent from "../moleculas/CardComponent";
import React, { useState } from "react";

function ProductsContainer() {
  const [carrito, setCarrito] = useState([]);
  const  AgregarAlCarrito= (event, parametro) => {
    carrito.push(parametro);
    setCarrito([...carrito]);
    console.log(carrito);
  }
  return (
    <div className="container">
            {carrito.length }
      <div className="row">
    
        <CardComponent
          title={"hola mundo"}
          img={
            "https://www.xtrafondos.com/wallpapers/paisaje-digital-en-atardecer-5846.jpg"
          }
         AgregarAlCarrito={AgregarAlCarrito}
        />
        {/* <CardComponent/>
            <CardComponent/>
            <CardComponent/> */}
      </div>
    </div>
  );
}
export default ProductsContainer;
