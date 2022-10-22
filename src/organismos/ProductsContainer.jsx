import CardComponent from "../moleculas/CardComponent";

function ProductsContainer(){
    return (
        <div className="container">
            <div className="row">
            <CardComponent title={'hola mundo'} img={'https://www.xtrafondos.com/wallpapers/paisaje-digital-en-atardecer-5846.jpg'}/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            </div>
        </div>
    )
}
export default ProductsContainer;