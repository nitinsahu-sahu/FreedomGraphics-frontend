import React from 'react'

const OrderAddress = (props) => {
    return (
        <div className='row border p-2 my-3 mx-5' style={{ backgroundColor: "#f8f9fa" }}>
            <div className='col-md-7 '>
                <div className='p-3'>
                    <div className='mb-2'>
                        <span className='fw-bold fs-5'>Delivery Address</span>
                    </div>
                    <div className='mb-2 text-capitalize'>
                        <span className='fw-bold'>{props.name}</span>
                    </div>
                    <div className='mb-2 text-capitalize' style={{ width: "55%" }}>
                        {props.address}, {props.pinCode}, {props.state}
                    </div>
                    <div className='mb-2'>
                        <span className='fw-bold'>Phone number</span>
                        <div>
                            {props.mobile}, {props.alt_number}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderAddress