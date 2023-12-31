import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
// extract data from the Redux store state using the useSelector hook
    const state = useSelector(state => state.handleCart)
    return (
        //Navbar component
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary py-3 sticky-top">
            <div className="container">
                {/* Navbar Logo name */}
                <NavLink className="navbar-brand fw-bold fs-4 px-2 text-light" to="/"> E-Shop</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Navbar Middle section for navigation */}
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                        {/* Navbar Buttons for Signin Signup and Cart */}

                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-light m-2 text-light"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-light m-2 text-light"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-light m-2 text-light"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar