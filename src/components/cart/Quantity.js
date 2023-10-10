import React, { useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const Quantity = (props) => {
    const { _id, onQuantityInc, onQuantityDec } = props
    const [qty, setQty] = useState(props.qty)
    const onQuantityIncrement = () => {
        setQty(qty + 1)
        onQuantityInc(_id, qty + 1)
    }
    const onQuantityDecrement = () => {
        if (qty<=1) return;
        setQty(qty - 1)
        onQuantityDec(_id, qty - 1)
    }
    return (
        <>
            <div className='d-flex '>
                <AiOutlineMinusCircle size={20} onClick={onQuantityDecrement} className='m-2'/>
                <h6 className='m-1 px-3 border border-dark border-3'>{qty}</h6>
                <AiOutlinePlusCircle size={20} onClick={onQuantityIncrement} className='m-2'/>
            </div>

        </>
    )
}

export default Quantity
