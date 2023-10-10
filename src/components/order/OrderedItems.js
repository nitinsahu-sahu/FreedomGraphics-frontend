import React from 'react'
import OrderItemLeftCom from './OrderItemLeftCom'
import OrderItemRightCom from './OrderItemRightCom'

const OrderedItems = (props) => {
    const { Orderitems } = props
    
    return (
        <div className='row border p-2 my-3 mx-5' style={{ backgroundColor: "#f8f9fa" }}>
            <OrderItemLeftCom allOrderItems={Orderitems.items}/>
            <OrderItemRightCom orderState= {Orderitems.orderStatus}/>
        </div>
    )
}

export default OrderedItems
