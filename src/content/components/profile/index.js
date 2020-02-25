// dependencies
import React from 'react';
import { Redirect } from 'react-router-dom';

export const Profile = props => {
    if (!props.user) {
        return <Redirect to='/' />
    }
    return (
        <div>
            <h2>Welcome back {props.user.username}</h2>
        </div>
    )
};