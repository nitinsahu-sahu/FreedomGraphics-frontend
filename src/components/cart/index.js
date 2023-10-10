import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItemsData from './CartItems';
import PriceSummary from '../global-components/PriceSummary';

const CartIndexComponent = (props) => {
    const cart = useSelector(state => state.cart);
    const [cartItems, setCartItems] = useState(cart.cartItems)
    useEffect(() => {
        setCartItems(cart.cartItems);
    }, [cart.cartItems]);
    return (
        <>
            <div className="container ">
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Cart - {Object.keys(cart.cartItems).length} items</h5>
                            </div>
                            <div className="card-body">
                                {
                                    Object.keys(cartItems).map((key, index) =>
                                        <CartItemsData
                                            key={index}
                                            cartItems={cartItems[key]}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <PriceSummary
                        link="/checkout"
                        totalItem={
                            Object.keys(cart.cartItems).reduce(
                                function (qty, key) {
                                    return qty + cart.cartItems[key].qty;
                                }, 0
                            )
                        }
                        totalPrice={
                            Object.keys(cart.cartItems).reduce(
                                (totalPrice, key) => {
                                    const { selling_price, qty } = cart.cartItems[key];
                                    return totalPrice + selling_price * qty;
                                }, 0
                            )
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default CartIndexComponent