import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const Quantity = ({ qty, setDecrement, setIncrement }) => {
    return (
        <div className="col-md-4 col-lg-4 col-xl-4 d-flex" style={{alignItems:'center'}}>

            <button className="btn btn-link px-2"
                onClick={() => setDecrement()}>
                <AiOutlineMinusCircle size={25}/>
            </button>
            <h4>{qty}</h4>

            <button className="btn btn-link px-2"
                onClick={() => setIncrement()}>
                <AiOutlinePlusCircle size={25}/>
            </button>
        </div>
    )
}

export default Quantity
