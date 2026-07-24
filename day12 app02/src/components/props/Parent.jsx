import Child from "./Child";
import Product from "./Product";
const Parent = () => {
    const userName = "Pari"
    const product = {
        pname: "Tea",
        price: 20,
        qty: 50,
        pimage: "https://media-public.canva.com/KLSQ0/MAGcv2KLSQ0/1/tl.jpg"
    } 

    return(
        <>
        <h1> Parent component</h1>
        <Child fname={userName} />

        <Product data = {product} />
        </>
    )
}

export default Parent;
