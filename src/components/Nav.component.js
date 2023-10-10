import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineMessage } from 'react-icons/md';
import { ButtonComponents, DropdownComponents } from './global-components/Form.components';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../redux/action/userAuth.action';

function Navcomponent() {
    const User_Details = useSelector(state => state.userAuth);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(signout())
    }
    return (
        <>
            <div className="d-flex">
                <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 font fs-5 fw-900">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="products">Shop</NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link" to="contact">
                                <div class="contactUsFlag" data-draggable="true" style={{ cursor: "grab", transition: "all 0.3s ease 0s" }}>
                                    <div class="content">
                                        <MdOutlineMessage size={30} />
                                        <span>Contact Us</span>
                                    </div>
                                </div>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            {
                                User_Details.authenticate ? <DropdownComponents
                                    typ="button"
                                    cn="btn btn-block fs-5 fw-bold "
                                    dropdownname={User_Details.user.fullname}
                                    dropthree="Logout"
                                    onClickThree={logout}

                                /> : <NavLink className="nav-link" to="signin">
                                    <ButtonComponents
                                        typ="button"
                                        cn="btn btn-block fs-5 fw-bold "
                                        btnname="Login"
                                    />
                                </NavLink>
                            }

                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link cart-trolley--link" to="cart">
                                <AiOutlineShoppingCart className='cart-trolley' />
                                <span className='cart-total--items'>
                                    <p style={{ fontWeight: "bold", marginTop: '-3px' }}>
                                        {Object.keys(cart.cartItems).length}
                                    </p>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navcomponent
