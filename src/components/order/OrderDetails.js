import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getOrder, getOrders } from '../../redux/action/order.action';
import OrderAddress from './OrderAddress';
import OrderedItems from './OrderedItems';

const OrderDetails = () => {
  const order = useSelector(state => state.order)
  const orderByIdAddress = useSelector(state => state.order.orderById.address)
  let [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("orderId")
  const dispatch = useDispatch()

  useEffect(() => {
    const payload = {
      orderId: params
    }
    dispatch(getOrder(payload))
  }, [])
  useEffect(() => {
    dispatch(getOrders())
  }, [])

  if (order.orderFetching) {
    return <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  }
  return (
    <>
      <OrderAddress
        name={orderByIdAddress.name}
        address={orderByIdAddress.address}
        pinCode={orderByIdAddress.pinCode}
        State={orderByIdAddress.state}
        mobile={orderByIdAddress.contact_number}
        alt_number={orderByIdAddress.alternate_number}
      />
      <OrderedItems
        Orderitems={order.orderById}
      />
    </>
  )
}

export default OrderDetails