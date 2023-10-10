import React from 'react'
import { NavLink } from 'react-router-dom'
import Navcomponent from './Nav.component'
import fgl from '../logo.png'
function Headercomponent() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid" >
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        <img src={fgl} alt='logo' />
                    </NavLink>
                    <Navcomponent />
                </div>
            </nav>
        </>
    )
}

export default Headercomponent

