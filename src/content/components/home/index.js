// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = props => {
    return (
        <div className='home'>
            <h2>Home</h2>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </div>
    )
};