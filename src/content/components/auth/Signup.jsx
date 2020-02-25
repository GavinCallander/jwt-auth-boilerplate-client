// dependencies
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

export const Signup = props => {
    
    let [email, setEmail] = useState('');
    let [firstname, setFirstname] = useState('');
    let [lastname, setLastname] = useState('');
    let [message, setMessage] = useState('');
    let [password, setPassword] = useState('');
    let [username, setUsername] = useState('');

    useEffect(() => {
        setMessage('')
    }, [email, firstname, lastname, password, username]);

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
            method: 'POST',
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password,
                username
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
        <div className='auth'>
            <h2>Signup</h2>
            <span className='red'>{message}</span>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input name='firstname' placeholder='First name' onChange={e => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input name='lastname' placeholder='Last name' onChange={e => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Username:</label>
                    <input name='username' placeholder='Username' onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' name='email' onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' name='password' onChange={e => setPassword(e.target.value)} />
                </div>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
};