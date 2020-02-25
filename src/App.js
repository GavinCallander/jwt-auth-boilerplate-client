// dependencies
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
// components
import { Content } from './content';
// partials
import { Nav } from './content/partials';
// styling
import './App.css';

export const App = () => {

    let [user, setUser] = useState(null);

    useEffect(() => {
        decodeToken()
    }, []);
    // helper functions
    const updateUser = newToken => {
        if (newToken) {
            localStorage.setItem('mernToken', newToken)
            decodeToken(newToken)
        } else {
            setUser(null)
        }
    }

    const decodeToken = existingToken => {
        let token = existingToken || localStorage.getItem('mernToken');
        if (token) {
            let decoded = jwtDecode(token)
            if (!decoded || Date.now() >= decoded.exp * 1000) {
                console.log('expired!')
                setUser(null);
            } else {
                setUser(decoded)
            }
        } else {
            setUser(null)
        }
    };

    return (
        <Router>
            <div className='app'>
                <Nav user={user} updateUser={updateUser} />
                <Content updateUser={updateUser} user={user} />
            </div>
        </Router>
    )
};