import React from 'react'
import { Link } from 'react-router-dom';
import { PriceFormat } from '../global-components/PriceFormat'
import { useSelector } from 'react-redux';

function TopRatedProducts() {
    const allProduct = useSelector((state) => state.product)
    const { featureProducts, isLoading } = allProduct
    if (isLoading) {
        return <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <>
            <section style={{ marginTop: "5%", marginBottom: "5%", backgroundColor: "#eceff4" }}>
                {/* <div className='container' >
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12 py-5'>
                            <p className='fs-5 fw-bold wlcm-text'>CHECK NOW</p>
                            <h3>Our Top Rated Products</h3>
                        </div>
                    </div>
                    <div className='row d-flex pb-5'>
                        {
                            featureProducts.map((items, index) =>

                                <div className="card" key={index} style={{ width: "18rem", marginRight: 23 }}>
                                    <Link to={`/single-product/${items._id}`}>
                                        <img src={items.image} className="card-img-top" height="300" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title fw-900 fs-5">{items.title}</p>
                                            <p className="card-title fw-900 fs-5"><PriceFormat price={items.price} /></p>
                                            <ButtonComponents btnname="ATC" cn="btn btn-block btn-sm fs-5 fw-bold mb-4" />
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div> */}
                
            </section>
        </>
    )
}

export default TopRatedProducts

