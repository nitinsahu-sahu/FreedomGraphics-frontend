import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { getOrders } from '../../redux/action/order.action';
import { useDispatch } from 'react-redux';
import { PriceFormat } from '../global-components/PriceFormat';

const OrderItemsList = (props) => {
    const { orderItems, paymentStatus, orderId } = props
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders())
    }, [])
    return (
        orderItems.map((userOrders) =>
            <Link to={`/order_details?orderId=${orderId}&productId=${userOrders.productId._id}`} style={{ color: "black", textDecoration: "none" }}>
                <div className='row border p-2 m-3'>
                    <div className='col-md-1 text-center'>
                        <img src={`http://localhost:8000/public/${userOrders.productId.featuredImg}`} width={80} height={100} alt="Blue Jeans Jacket" />
                    </div>
                    <div className='col-md-5 text-center'>
                        <p>{userOrders.productId.name}</p>
                    </div>
                    <div className='col-md-1 text-center'>
                        <p>
                            <PriceFormat price={userOrders.productId.selling_price} />
                        </p>
                    </div>
                    <div className='col-md-5 text-center text-capitalize'>
                        <p>{paymentStatus}</p>
                    </div>
                </div>
            </Link>
        )
    )
}

export default OrderItemsList

{/*  */ }
// {
//   allOrders.map((ordersData) =>
//     ordersData.items.map((item) =>
//       <OrderItemsList
//         proImg={item.productId.featuredImg}
//         _id={item.productId._id}
//         name={item.productId.name}
//         selling_price={item.productId.selling_price}
//         paymentStatus={ordersData.paymentStatus}
//       />
//     )
//   )
// }