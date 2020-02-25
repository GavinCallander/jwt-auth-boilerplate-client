// dependencies
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

export const Login = props => {

    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    let [password, setPassword] = useState('');

    useEffect(() => {
        setMessage('')
    }, [email, password]);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(process.env.REACT_APP_SERVER_URL)
        console.log(email, password)
        fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                setMessage(`${res.status}: ${res.statusText}`)
                return
            }
            res.json().then(result => {
                props.updateUser(result.token)
            })
        })
        .catch(err => {
            setMessage(`${err.toString()}`)
        })
    }

    if (props.user) {
        return <Redirect to='/profile' />
    }

    return (
        <div className='login'>
            <span className='red'>{message}</span>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type='email' name='email' onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' name='password' onChange={e => setPassword(e.target.value)} />
                </div>
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
};