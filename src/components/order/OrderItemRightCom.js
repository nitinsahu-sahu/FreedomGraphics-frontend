import React from 'react'

const OrderItemRightCom = (props) => {
    let { orderState } = props
    return (
        <div className='col-md-7 text-center text-capitalize'>
            <div className="card card-stepper text-black" style={{ border: "none" }}>
                <ul id="progressbar-2" className="d-flex justify-content-between mx-0 mt-0 mb-3 px-0 pt-0 pb-2">
                    {
                        orderState.map((status, index) =>
                            <li className={`step0 ${status.isCompleted ? 'active' : 'isActive'} text-center`} id={`step${index + 1}`}></li>
                        )
                    }
                </ul>
                <div class="d-flex justify-content-between">
                    <div class="d-lg-flex align-items-center">
                        <i class="fas fa-clipboard-list fa-2x me-lg-4 mb-3 mb-lg-0"></i>
                        <div>
                            <p class=" mb-1">Order</p>
                            <p class=" mb-0">Processed</p>
                        </div>
                    </div>
                    <div class="d-lg-flex align-items-center">
                        <i class="fas fa-box-open fa-2x me-lg-4 mb-3 mb-lg-0"></i>
                        <div>
                            <p class=" mb-1">Order</p>
                            <p class=" mb-0">Shipped</p>
                        </div>
                    </div>
                    <div class="d-lg-flex align-items-center">
                        <i class="fas fa-shipping-fast fa-2x me-lg-4 mb-3 mb-lg-0"></i>
                        <div>
                            <p class=" mb-1">Order</p>
                            <p class=" mb-0">En Route</p>
                        </div>
                    </div>
                    <div class="d-lg-flex align-items-center">
                        <i class="fas fa-home fa-2x me-lg-4 mb-3 mb-lg-0"></i>
                        <div>
                            <p class=" mb-1">Order</p>
                            <p class=" mb-0">Arrived</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItemRightCom