import React from 'react'
import { AiTwotoneSecurityScan } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { FcMoneyTransfer } from 'react-icons/fc';
import { RiSecurePaymentFill } from 'react-icons/ri';

function Service() {
    return (
        <>
            <div className='container' style={{marginTop:"5%", marginBottom:"5%"}}>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4 service'>
                        <div className='service'>
                            <div className="common super">
                                <TbTruckDelivery className="icon" size={50} />
                                <h3 className='text-center'>Super fast and free delivery</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <div className='row mb-2'>
                            <div className='col-sm-12 col-md-12 col-lg-12 '>
                                <div className='service py-4'>
                                    <div className="common px-3">
                                        <AiTwotoneSecurityScan className="icon" size={50} />
                                        <h3 className='text-center'>Non-contact Shipping</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                <div className='service py-4'>
                                    <div className="common px-3">
                                        <FcMoneyTransfer className="icon " size={50} />
                                        <h3 className='text-center'>Money-back Guaranteed</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center service'>
                        <div className='service '>
                            <div className="common super">
                                <RiSecurePaymentFill className="icon " size={50} />
                                <h3 className='text-center'>Super Secure Payment System</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
