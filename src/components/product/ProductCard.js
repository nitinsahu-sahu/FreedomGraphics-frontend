import React from 'react'
import { PriceFormat } from '../global-components/PriceFormat'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <div className='row mt-2'>
                    {
                        props.items.map((items, index) =>
                            <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-center py-2' key={index}>
                                <Link to={`/${items.slug}/${items._id}`}>
                                    <div className="card " style={{ width: "18rem" }}>
                                        <div className='m-3 text-center'>
                                            <img src={`http://localhost:8000/public/${items.featuredImg}`} width={180} height={230} alt={items.name} />
                                        </div>
                                        <div className="card-body text-dark" >
                                            <div style={{ maxHeight: "41px", overflow:"hidden" }}>
                                            <h6 className="card-title " >{items.name}</h6>
                                            </div>
                                            {/* <p class="card-text">{items.description}</p> */}
                                            <p className="card-title fs-5"><PriceFormat price={items.price} /> </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>
  )
}

export default ProductCard