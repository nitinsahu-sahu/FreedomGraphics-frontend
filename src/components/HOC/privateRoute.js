import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'


const Protected = () => {
  const token = localStorage.getItem("user_token");
    return (
      token ? <Outlet /> : <Navigate to="/signin" />
    )
}

export default Protected
