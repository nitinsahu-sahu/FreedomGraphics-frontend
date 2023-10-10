import React, {  useState } from 'react'
import { PriceFormat } from '../global-components/PriceFormat'
import { ButtonComponents } from '../global-components/Form.components'
import Quantity from './Quantity'
import { useSelector, useDispatch} from 'react-redux'
import { addToCart,  } from '../../redux/action/cart.action'

const CartItemsData = (props) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart);
    const [cartItem, setCartItem] = useState(cart.cartItems)
    const { _id, name, selling_price, qty, img } = props.cartItems

    const onQuantityIncrement = (_id, qty) => {
        const { name, selling_price, img } = cartItem[_id];
        dispatch(addToCart({ _id, name, selling_price, img, qty }, 1));
    };

    const onQuantityDecrement = (_id, qty) => {
        const { name, selling_price, img } = cartItem[_id];
        dispatch(addToCart({ _id, name, selling_price, img, qty }, -1));
    };


    return (
        <div key={props.key}>
            <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={`http://localhost:8000/public/${img}`} width={146} height={167} alt="Blue Jeans Jacket" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <p><strong>{name}</strong></p>
                    <p className="text-start text-success">
                        <strong>
                            <PriceFormat price={selling_price} />
                        </strong>
                    </p>
                    <ButtonComponents
                        typ="button"
                        cn="btn btn-block fs-5 fw-bold mb-4 text-uppercase"
                        btnname="Remove"
                    />
                </div>

                {/* Quantity control section */}
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                        <Quantity
                            _id={_id}
                            qty={qty}
                            onQuantityInc={onQuantityIncrement}
                            onQuantityDec={onQuantityDecrement}
                        />
                    </div>
                </div>
            </div>
            <hr className="my-4" />
        </div>
    )
}

export default CartItemsData