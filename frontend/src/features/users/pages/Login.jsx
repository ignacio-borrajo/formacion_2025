import React from 'react'

const LoginForm = () => {
    return <>
        <input type='text' placeholder='Username' value={username} onChange={() => {setUsername(e.target.value)}}/>
        <input type='password' placeholder='Password' value={password} onChange={() => {setPassword(e.target.value)}}/>
        <button onClick={handleClick}>Login</button>
    </>
}

export default LoginForm;