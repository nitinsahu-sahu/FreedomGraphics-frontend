import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import OrderItemsList from './OrderItemsList';

const Orders = () => {
  const getorders = useSelector(state => state.order)
  const [allOrders, setAllOrders] = useState(getorders.orders)
  return (
    <>
      {
        allOrders.map((ordersData) =>
          <OrderItemsList
            orderItems={ordersData.items}
            paymentStatus={ordersData.paymentStatus}
            orderId={ordersData._id}
          />
        )
      }
    </>
  )
}

export default Orders


