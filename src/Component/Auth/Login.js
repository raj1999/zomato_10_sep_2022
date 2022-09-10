import React, { useState } from 'react'
import './Login.css'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disable, setDisable] = useState(true)
    const emailHandler = (event) => {
        if (email === '') {
        }else {
            
            setEmail(event.target.value)
        }
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }
    const formHandler = (e) => {
        e.preventDefault();
        console.log(email, "--", password)
    }
    return (
        <div className='login-form'>
            <form onSubmit={formHandler}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onBlur={emailHandler} />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onBlur={passwordHandler} />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Remember Me?</label>
                </div>
                <div class="form-group submit">
                    <button disabled={disable} type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login
