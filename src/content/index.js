// dependencies
import React from 'react';
import { Route } from 'react-router-dom';
// components
import { Home } from './components/home';
import { Login, Signup } from './components/auth';
import { Profile } from './components/profile';

export const Content = props => {
    return (
        <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/login' render={() => 
                <Login user={props.user} updateUser={props.updateUser} />
            } />
            <Route path='/profile' render={() => 
                <Profile user={props.user} />
            } />
            <Route path='/signup' render={() => 
                <Signup user={props.user} updateUser={props.updateUser} />
            } />
        </div>
    )
};