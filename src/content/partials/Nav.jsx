// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = props => {

    const handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem('mernToken');
        props.updateUser();
    }

    let links = (
        <span>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </span>
    )

    if (props.user) {
        links = (
            <span>
                <h4>Hey, {props.user.username}</h4>
                <Link to='/profile'>Profile</Link>
                <Link to='/' onClick={handleLogout}>Logout</Link>
            </span>
        )
    }

    return (
        <nav>
            <Link to='/'>Home</Link>
            {links}
        </nav>
    )
};