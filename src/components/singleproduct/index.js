import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProductDetailsById } from '../../redux/action/product.action'
import { useDispatch, useSelector } from 'react-redux';
// import { PriceFormat } from '../global-components/PriceFormat';
import { ButtonComponents } from '../global-components/Form.components';
// import Rating from './Rating';
// import Quantity from './Quantity';
import { addToCart } from '../../redux/action/cart.action';
import { Parser } from "html-to-react";
import { BiArrowBack } from 'react-icons/bi';
import { PriceFormat } from '../global-components/PriceFormat';
import Rating from './Rating';
function SingleProductIndexComponent() {
    const productDetail = useSelector(state => state.product.productDetails)
    const productLoading = useSelector(state => state.product.loading)
    let history = useNavigate();
    const htmlParser = new Parser();
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        const payload = {
            params: {
                productId: params.id
            }
        }
        dispatch(getProductDetailsById(payload));
    }, []);

    if (Object.keys(productDetail).length === 0) {
        return null;
    }
    if (productLoading) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <>
            <div className="container my-3 ">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <img id="main-image" src={`http://localhost:8000/public/${productDetail.featuredImg}`} width={250} />
                                        </div>
                                        <div className="thumbnail d-flex justify-content-center ">
                                            {
                                                productDetail.productImg.map((pimg, index) =>
                                                    <div key={index} className='m-2 border border-3 p-2 rounded'>
                                                        <img src={`http://localhost:8000/public/${pimg.img}`} width={50} height={60} alt={pimg._id} />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 product">
                                    <div className=" p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <Link to="/products">
                                                    <BiArrowBack />
                                                    <span className="ml-1">Back</span>
                                                </Link>
                                            </div>
                                            <i className="fa fa-shopping-cart text-muted"></i>
                                        </div>
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand"><Rating star="3" count="2" /></span>
                                            <h5 className="text-uppercase">{productDetail.name}</h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                <span className="act-price"><PriceFormat price={productDetail.selling_price} /></span>
                                                <div className="ml-2">
                                                    <small className="dis-price"><PriceFormat price={productDetail.price} /></small>
                                                    {/* <span>40% OFF</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div >
                                            <h4>Description</h4>
                                            <p style={{ fontSize: 13 }}>{htmlParser.parse(productDetail.description)}</p>
                                        </div>
                                        <div className="cart mt-4 align-items-center">
                                            <ButtonComponents
                                                cn="btn btn-block fs-5 fw-bold mb-4 text-uppercase"
                                                btnname="Add to cart"
                                                onClick={() => {
                                                    const { _id, name, selling_price } = productDetail;
                                                    const img = productDetail.featuredImg;
                                                    dispatch(addToCart({ _id, name, img, selling_price }));
                                                    history("/cart");
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className='row'>
                                    <div className='col-md-10 m-3'>
                                        <h4>Specifications</h4>
                                        <div className='pl-3'>
                                            <p style={{ fontSize: 13 }}>{htmlParser.parse(productDetail.short_description)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleProductIndexComponent

{/* <div className="sizes mt-5">
                                            <h6 className="text-uppercase">Size</h6> <label className="radio">
                                                <input type="radio" name="size" value="S" checked /> <span>S</span> </label> <label className="radio">
                                                <input type="radio" name="size" value="M" /> <span>M</span> </label> <label className="radio">
                                                <input type="radio" name="size" value="L" /> <span>L</span> </label> <label className="radio">
                                                <input type="radio" name="size" value="XL" /> <span>XL</span> </label> <label className="radio">
                                                <input type="radio" name="size" value="XXL" /> <span>XXL</span> </label>
                                        </div> */}