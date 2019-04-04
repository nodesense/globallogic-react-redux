// Functional Component
// Function as a component
// Presentation component
// Stateless component

import React from 'react';

import {NavLink} from 'react-router-dom';

// return virtual dom
// react call this function automatically
export function Header() {
    return (
        <div>
            <h4>Shopping Cart</h4>

            <NavLink to="/" className='button'
                            exact
                            activeClassName='success' >
                Home
            </NavLink>

            <NavLink to="/products" className='button'
                            activeClassName='success' >
                Products
            </NavLink>

            <NavLink to="/contact" className='button'
                            activeClassName='success' >
                Contact
            </NavLink>


            <NavLink to="/about" className='button'
                            activeClassName='success' >
                About
            </NavLink>


            <NavLink to="/checkout" className='button'
                            activeClassName='success' >
                Checkout
            </NavLink>


            <NavLink to="/dashboard" className='button'
                            activeClassName='success' >
                Dashboard
            </NavLink>


            <NavLink to="/counter" className='button'
                            activeClassName='success' >
                Counter
            </NavLink>

            <hr />
        </div>
    )
}