import React from 'react'
import { ButtonComponents } from './Form.components';
import { useNavigate } from 'react-router-dom';
import { PriceFormat } from './PriceFormat';

const PriceSummary = (props) => {
    let history = useNavigate();
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Products ({props.totalItem} items)
                            <span>
                                <PriceFormat price={props.totalPrice} />
                            </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                            Shipping
                            <span className='text-success'>Free</span>
                        </li>
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>Total amount</strong>
                                <strong>
                                    <p className="mb-0">(including VAT)</p>
                                </strong>
                            </div>
                            <span>
                                <strong>
                                    <PriceFormat price={props.totalPrice } />
                                </strong>
                            </span>
                        </li>
                    </ul>
                    {
                        props.link ? <ButtonComponents
                            typ="button"
                            cn="btn btn-block fs-5 fw-bold mb-4 text-uppercase"
                            btnname="Place order"
                            onClick={() => {
                                // const { _id, name, selling_price } = productDetail;
                                // const img = productDetail.featuredImg;
                                // dispatch(addToCart({ _id, name, img, selling_price }));
                                history(props.link);
                            }}
                        /> : null
                    }

                </div>
            </div>
        </div>
    )
}

export default PriceSummary