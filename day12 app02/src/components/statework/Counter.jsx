import React, { useState } from 'react'

const Counter = () => {
    const [ count , setCount] = useState(1)
    const [ flag , setFlag] = useState()
    const minus =() =>{
        if (count<=1) {
            setFlag(true)
        }
        else{
            setCount(count - 1)
        }
    }

    const plus =() =>{
        if(count>=5)
        {
            alert('You cannot add more')
        }
        else{
            setCount(count + 1)
        }
    }
    return (
        <>
        <div className="container">
            {
            flag?
            <button className='btn btn-btn-outline-success' onClick={()=>setFlag(false)}>
                Add to Cart
            </button>
            :
            <button className='btn btn-success'>
        
            <span className='mx-2' onClick={minus}> - </span>
             <span > {count}  </span>
            <span className='mx-2' onClick={plus}> + </span>
            </button>
}
         </div>
        </>
    )
}
export default Counter;
