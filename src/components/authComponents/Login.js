import React, { useState } from 'react'
import { ButtonComponents, FormInputModule, FormLabelModule } from '../global-components/Form.components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux/action/userAuth.action'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const User_Details = useSelector(state => state.userAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const userLoginData = async (e) => {
        e.preventDefault();
        const user_Login_Data = {
            email,
            password
        }
        dispatch(userLogin(user_Login_Data))
    }
    if (User_Details.authenticate) {
        setTimeout(() => {
            return navigate("/products");
        }, "3000");
    }
    return (
        <>
            <div className="container py-4">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{ borderRadius: "1rem", backgroundColor: "#f8f9fa" }}>
                            <div className="card-body p-5 ">
                                <h3 className="mb-3 text-center">Sign in</h3>
                                {
                                    User_Details.message == "" ? <p className="text-danger fw-bold">{User_Details.error}</p> : <p className="text-success fw-bold" >{User_Details.message}</p>
                                }
                                <form onSubmit={userLoginData}>
                                    <div className="form-outline mb-4">
                                        <FormLabelModule cn="form-label" title="Email" />
                                        <FormInputModule typ="email" cn="form-control form-control-lg" val={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <FormLabelModule cn="form-label" title="Password" />
                                        <FormInputModule typ="password" nm="password" val={password} cn="form-control form-control-lg" onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <div className='text-center'>
                                        <ButtonComponents
                                            typ="submit"
                                            cn="btn btn-block fs-5 fw-bold "
                                            btnname="Login"
                                        />
                                    </div>
                                </form>
                                <div className='mt-3 text-center'>
                                    <p>
                                        New to Freedom Graphics?
                                        <Link to="/signup">
                                            <span> Create an account</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

{/* <hr className="my-4" />

            <button className="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;"
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            <button className="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;"
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button> */}

{/* <!-- Checkbox -->
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div> */}