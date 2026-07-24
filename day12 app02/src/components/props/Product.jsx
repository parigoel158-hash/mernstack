
import React from 'react'
const Product = (props) => {
    console.log(props.data)
    //Object Destructing
    const {pname,price, qty, pimage} = props.data;
    return (
        <>
        <div className="container w-25">
            <div className="card">
                <img src={pimage} alt="" className='img-fluid' />
            </div>
            <div className="card-body text-center fw-bold fs-3 fst-italic">
                {pname}
            </div>
            <div className="card-footer d-flex justify-content-around">
                <span> {price} </span>
                <span> {qty} </span>
                <span> {price*qty} </span>
            </div>
        </div>
        </>
    )
}

export default Product;