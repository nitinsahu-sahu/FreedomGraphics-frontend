import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ButtonComponents, FormInputModule, FormLabelModule, RadioComponents } from '../global-components/Form.components';
import CommonModal from '../global-components/CommonModel';
import { addDeliveryAddress } from '../../redux/action/address.action';
import { useDispatch } from 'react-redux';

const CheckOutSteps = (props) => {
    const dispatch = useDispatch();
    const [addAddressModal, setAddAddressModal] = useState(false)
    const [name, setName] = useState('')
    const [alternate_number, setAlternate_number] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [contact_number, setContact_number] = useState('')
    const [address, setAddress] = useState('')
    const [locality, setLocality] = useState('')
    const [landmak, setLandmak] = useState('')
    const [state, setState] = useState('')
    const [city_District_Town, setCity_District_Town] = useState('')
    const [addresstype, setAddresstype] = useState('home')
    const onAddressSubmit = (e) => {
        e.preventDefault()
        const payload = {
            address: {
                name,
                alternate_number,
                address,
                pinCode,
                contact_number,
                state,
                addresstype,
                locality,
                landmak,
                city_District_Town
            }
        }
        dispatch(addDeliveryAddress(payload))
    }

    const addAddress = () => {
        setAddAddressModal(true)
    }

    const renderAddAddressModel = () => {
        return (
            <CommonModal
                show={addAddressModal}
                handleClose={() => setAddAddressModal(false)}
                title={'Add New Address'}
                size="lg"
            >
                <form onSubmit={onAddressSubmit} >
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <FormLabelModule cn="form-label " title="Name" />
                                <FormInputModule typ="text" cn="form-control form-control-lg" val={name} onChange={e => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <FormLabelModule cn="form-label " title="Alternate Number" />
                                <FormInputModule typ="text" cn="form-control form-control-lg" val={alternate_number} onChange={e => setAlternate_number(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <FormLabelModule cn="form-label" title="Address" />
                                <FormInputModule typ="text" cn="form-control form-control-lg" val={address} onChange={e => setAddress(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <FormLabelModule cn="form-label " title="Phone Number" />
                                <FormInputModule typ="text" cn="form-control form-control-lg" val={contact_number} onChange={e => setContact_number(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="form-outline">
                                <FormLabelModule cn="form-label " title="Pin code" />
                                <FormInputModule typ="text" cn="form-control form-control-lg" val={pinCode} onChange={e => setPinCode(e.target.value)} />
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="form-outline">
                                <FormLabelModule cn="form-label " title="State" />
                                <FormInputModule typ="text" cn="form-control form-control-lg" val={state} onChange={e => setState(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="form-outline">
                                <FormLabelModule cn="form-label " title="City" />
                                <FormInputModule typ="text" cn="form-control form-control-lg" val={city_District_Town} onChange={e => setCity_District_Town(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <FormLabelModule cn="form-label " title="Addrss Type" />
                            <div class="form-check">
                                <FormInputModule typ="radio" val="work" onChange={() => setAddresstype('work')} cn="form-check-input" nm="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Work
                                </label>
                            </div>
                            <div class="form-check">
                                <FormInputModule typ="radio" val="home" onChange={() => setAddresstype('home')} cn="form-check-input" nm="flexRadioDefault" id="flexRadioDefault2" checked={true} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Home
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="form-outline">
                                <FormLabelModule cn="form-label " title="Locality" />
                                <FormInputModule typ="text" cn="form-control form-control-lg" val={locality} onChange={e => setLocality(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="form-outline">
                                <FormLabelModule cn="form-label " title="Landmak" />
                                <FormInputModule typ="text" cn="form-control form-control-lg" val={landmak} onChange={e => setLandmak(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <ButtonComponents typ="submit" btnname="Save" cn="btn btn-block fs-5 fw-bold mb-4" />
                </form>
            </CommonModal>
        );
    }
    
    return (
        <div className="card mb-4" >
            <div className={`card-header d-flex justify-content-between ${props.active && 'active'}`}>
                <div className='d-flex'>
                    <p className='border px-2 border-danger stepNumber'>{props.stepNumber}</p>
                    <h5 className='px-2'>{props.title}</h5>
                </div>
                <div>
                    {
                        props.actinBtn ? <ButtonComponents
                            typ="button"
                            cn="btn text-uppercase ml-5"
                            btnname={props.actinBtn}
                            onClick={addAddress}
                        /> : null
                    }
                </div>
            </div>
            <div className="card-body border-success">
                {
                    props.body && props.body
                }
            </div>
            {renderAddAddressModel()}
        </div>
    )
}

export default CheckOutSteps