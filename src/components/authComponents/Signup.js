import React, { useState } from 'react'
import { ButtonComponents, FormInputModule, FormLabelModule } from '../global-components/Form.components'
import { registerUser } from '../../redux/action/userAuth.action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("")
  const [first_name, setFirstname] = useState("")
  const [last_name, setLastname] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_pwd, setConfirm_pwd] = useState("")
  const [contact_number, setContact_number] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const User_Details = useSelector(state => state.userAuth);
  const creatUser = async (e) => {
    e.preventDefault();
    const createUserData = {
      email,
      password,
      confirm_pwd,
      contact_number,
      first_name,
      last_name,
    }
    dispatch(registerUser(createUserData))
  }
  if (!User_Details.loading) {
    setTimeout(() => {
      return navigate("/signin");
    }, "3000");
  }
  return (
    <>
      <section className="text-center mt-4">
        <div className="card mx-4 mx-md-5 shadow-5-strong" >
          <div className="card-body px-md-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                {
                  User_Details.message == "" ? <p className="text-danger fw-bold">{User_Details.error}</p> : <p className="text-success fw-bold" >{User_Details.message}</p>
                }
                <form onSubmit={creatUser} >
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <FormLabelModule cn="form-label " title="First Name" />
                        <FormInputModule typ="text" cn="form-control form-control-lg" val={first_name} onChange={e => setFirstname(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <FormLabelModule cn="form-label " title="Last Name" />
                        <FormInputModule typ="text" cn="form-control form-control-lg" val={last_name} onChange={e => setLastname(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <FormLabelModule cn="form-label" title="Email Address" />
                        <FormInputModule typ="email" cn="form-control form-control-lg" val={email} onChange={e => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <FormLabelModule cn="form-label " title="Mobile Number" />
                        <FormInputModule typ="text" cn="form-control form-control-lg" val={contact_number} onChange={e => setContact_number(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <FormLabelModule cn="form-label " title="Password" />
                        <FormInputModule typ="password" cn="form-control form-control-lg" val={password} onChange={e => setPassword(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <FormLabelModule cn="form-label " title="Confirm Password" />
                        <FormInputModule typ="text" cn="form-control form-control-lg" val={confirm_pwd} onChange={e => setConfirm_pwd(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <ButtonComponents typ="submit" btnname="Sign up" cn="btn btn-block fs-5 fw-bold mb-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup

{/* <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div> */}