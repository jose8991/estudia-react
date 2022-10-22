import CardComponent from "../moleculas/CardComponent";

function ProductsContainer(){
    return (
        <div className="container">
            <div className="row">
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            </div>
        </div>
    )
}
export default ProductsContainer;