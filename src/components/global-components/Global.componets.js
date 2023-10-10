import React from 'react'
import { ButtonComponents } from './Form.components'
import { Link } from 'react-router-dom'

function HeroComponents(props) {
    return (
        <>
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <div className='hero-section-left align-middle'>
                        <p className="text-start fs-5 fw-bold wlcm-text" >Welcome to</p>
                        <h1>{props.title}</h1>
                        <p className="text-start fs-5">
                            It is a long established fact that a reader will
                            be distracted by the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using
                        </p>
                        <div>
                            <Link to="/products">
                                <ButtonComponents
                                    typ="button"
                                    cn="btn btn-block fs-5 fw-bold mb-4"
                                    btnname="Shop"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 hero-right'>
                    <div className='hero-section-img-right'>
                        <img src='./hero.jpg' alt='front-hero-image' className='img-style' />
                    </div>
                </div>
            </div>
        </>
    )
}


export default HeroComponents
