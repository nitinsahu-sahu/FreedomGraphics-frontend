import React, { useEffect, useState } from 'react'
import PriceSummary from '../global-components/PriceSummary'
import { getAddress } from '../../redux/action/address.action';
import { useDispatch, useSelector } from 'react-redux';
import CheckOutSteps from './CheckOutSteps';
import { ButtonComponents, FormInputModule } from '../global-components/Form.components';
import { userLogin } from '../../redux/action/userAuth.action';
import CartItemsData from '../cart/CartItems';
import { addOrder } from '../../redux/action/order.action';
import { createOrderRazorpay } from '../../redux/action/payment.action';

const ChackOut = () => {
  const cart = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState(cart.cartItems)

  const auth = useSelector(state => state.userAuth);
  const userAddress = useSelector(state => state.address);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState([])
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [confirmAddress, setConfirmAddress] = useState(false)
  const [confirmEmail, setConfirmEmail] = useState(false)
  const [paymentOption, setPaymentOption] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const dispatch = useDispatch();
  const userLoginData = async (e) => {
    e.preventDefault();
    const user_Login_Data = {
      email,
      password
    }
    dispatch(userLogin(user_Login_Data))
  }

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
  }, [auth.authenticate])

  useEffect(() => {
    const address = userAddress.address.map(adr => ({
      ...adr,
      selected: false,
      edit: false
    }))
    setAddress(address);
  }, [userAddress.address]);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  const selectAddress = (sa) => {
    const updatedAddress = address.map(adr =>
      adr._id == sa._id ? { ...adr, selected: true } : { ...adr, selected: false }
    )
    setAddress(updatedAddress)
  }

  const confirmDeliveryAddress = (sabybtn) => {
    setConfirmAddress(true)
    setSelectedAddress(sabybtn)
  }

  const onConfirmOrder = () => {
    let totalPrice =
      Object.keys(cart.cartItems).reduce(
        (totalPrice, key) => {
          const { selling_price, qty } = cart.cartItems[key];
          return totalPrice + selling_price * qty;
        }, 0
      )

    let items = Object.keys(cart.cartItems).map((key) => ({
      productId: key,
      payablePrice: cart.cartItems[key].selling_price,
      purchasedQty: cart.cartItems[key].qty
    }))

    const payload = {
      // "addressId": selectedAddress._id,
      "totalAmount": totalPrice,
      // "addressName:":"",
      items,
      "paymentStatus": "pending",
      "paymentType": paymentOption,

    }
    dispatch(addOrder(payload))
    setConfirmOrder(true)
  }

  const onConfirmOrderwithRozarpay = () => {
    let totalPrice =
      Object.keys(cart.cartItems).reduce(
        (totalPrice, key) => {
          const { selling_price, qty } = cart.cartItems[key];
          return totalPrice + selling_price * qty;
        }, 0
      )
    const payload = {
      "totalAmount": totalPrice,
      "paymentStatus": "pending",
      "paymentType": paymentOption,

    }
    dispatch(addOrder(payload))
  }

  if (confirmOrder) {
    return (
      <div>Thank you!</div>
    )
  }
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center my-4">
        <div className="col-md-8">
          <CheckOutSteps
            stepNumber='1'
            title="LOGIN"
            active={!auth.authenticate}
            body={
              auth.authenticate ? <div className='row'>
                <div><span>Email : </span>
                  <span>{auth.user.email}</span></div>
                <div><span>Name : </span>
                  <span>{auth.user.fullname}</span></div>
              </div> : <form onSubmit={userLoginData}>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className="form-outline mb-4">
                      <FormInputModule typ="email" cn="form-control form-control-lg" val={email} onChange={e => setEmail(e.target.value)} plh="Enter Email" />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className="form-outline mb-4">
                      <FormInputModule plh="Enter Password" typ="password" nm="password" val={password} cn="form-control form-control-lg" onChange={e => setPassword(e.target.value)} />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <ButtonComponents
                      typ="submit"
                      cn="btn btn-block fs-5 fw-bold "
                      btnname="Login"
                    />
                  </div>



                </div>
              </form>
            }
          />
          <CheckOutSteps
            stepNumber='2'
            title="DELIVERY ADDRESS"
            active={!confirmAddress && auth.authenticate}
            actinBtn="Add New Address"
            body={
              <>
                {
                  confirmAddress ?
                    <div className='row  '>
                      <div className='col-md-8'>
                        <div className='text-capitalize'>
                          <span >{selectedAddress.name} </span>
                          <span className='text-uppercase border bg-success text-white mx-3' style={{ fontSize: "12px", paddingLeft: "4px" }}> {selectedAddress.addresstype} </span>
                          <span > {selectedAddress.contact_number}</span>
                        </div>
                        <div className='text-capitalize'>
                          {selectedAddress.address}, {selectedAddress.pinCode}
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <ButtonComponents
                          btnname="Changes"
                          cn="btn btn-block fs-5 fw-bold mb-4 text-uppercase"
                          onClick={() => setConfirmAddress(false)}
                        />
                      </div>
                    </div>
                    :
                    address.map(adr =>
                      <div className={`row border mb-1 id_${adr._id}`}>
                        <div className='col-md-1'>
                          <FormInputModule onClick={() => { selectAddress(adr) }} typ="radio" nm="address" />
                        </div>
                        <div className='col-md-10'>
                          <div>
                            <div className='text-capitalize'>
                              <span >{adr.name} |</span>
                              <span > {adr.addresstype} |</span>
                              <span > {adr.contact_number}</span>
                            </div>
                            <div className='text-capitalize'>
                              {adr.address}
                            </div>
                            {
                              adr.selected ? <ButtonComponents
                                typ="button"
                                cn="btn btn-block fs-5 fw-bold my-2 text-uppercase "
                                btnname="DELIVERY HERE"
                                onClick={() => confirmDeliveryAddress(adr)}
                              /> : null
                            }

                          </div>
                        </div>
                        <div className='col-md-1'>
                          {
                            adr.selected ? <span>Edit</span> : null
                          }
                        </div>
                      </div>
                    )
                }
              </>
            }
          />
          <CheckOutSteps
            stepNumber='3'
            title="ORDER SUMMARY"
            active={false}
            body={
              <div>
                <div className='row'>
                  {
                    !confirmEmail ? <>
                      {
                        Object.keys(cartItems).map((key, index) =>
                          <CartItemsData
                            key={index}
                            cartItems={cartItems[key]}
                          />
                        )
                      }
                      <div className='col-md-8'>
                        <p>Order confirmation email will be sent to {auth.user.email}</p>
                      </div>
                      <div className='col-md-4'>
                        <ButtonComponents
                          btnname="Continue"
                          cn="btn btn-block fs-5 fw-bold mb-4 text-uppercase"
                          onClick={() => setConfirmEmail(true)}
                        />
                      </div></> :
                      <div className='row'>
                        <div className='col-md-8'>
                          <p >
                            Order email is
                            <span className='fw-bold text-success'> {auth.user.email}</span>
                          </p>
                          <p >
                            Cart items (
                            <span className='fw-bold text-success'>{Object.keys(cart.cartItems).length}</span>
                            )
                          </p>
                        </div>
                        <div className='col-md-4'>
                          <ButtonComponents
                            btnname="Changes"
                            cn="btn btn-block fs-5 fw-bold  text-uppercase"
                            onClick={() => setConfirmEmail(false)}
                          />

                        </div>
                      </div>

                  }


                </div>
              </div>
            }
          />
          <CheckOutSteps
            stepNumber='4'
            title="PAYMENT OPTIONS"
            active={false}
            body={
              <>
                <div className="row mb-1">
                  <div className='col-md-1'>
                    <FormInputModule typ="radio" nm="paymentOptions" onClick={() => { setPaymentOption("cod") }} />
                  </div>
                  <div className='col-md-3'>
                    <div className='text-capitalize'>
                      <span >COD (Cash on Delivery)</span>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <ButtonComponents
                      btnname="CONFIRM ORDER"
                      cn="btn btn-block fs-5 mt-1 text-uppercase"
                      onClick={onConfirmOrder}
                    />
                  </div>
                </div>
                <div className="row mb-1">
                  <div className='col-md-1'>
                    <FormInputModule typ="radio" nm="paymentOptions" onClick={() => { setPaymentOption("razorpay") }} />
                  </div>
                  <div className='col-md-3'>
                    <div className='text-capitalize'>
                      <span >RAZORPAY</span>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <ButtonComponents
                      btnname="CONFIRM ORDER WITH ROZARPAY"
                      cn="btn btn-block fs-5 mt-1 text-uppercase"
                      onClick={onConfirmOrderwithRozarpay}
                    />
                  </div>
                </div>
              </>
            }
          />
        </div>
        <PriceSummary
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
  )
}

export default ChackOut