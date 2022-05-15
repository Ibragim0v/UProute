import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import './Login.scss'

export const Login = () => {

    const { setToken } = useAuth();

    var navigate = useNavigate()

    let handleLogin = (e) => {
        e.preventDefault()

        fetch('https://reqres.in/api/login', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
        }).then(res => res.json())
        .then(data => {
            if (data.token) {
                setToken(data);
                navigate('/')
            }else {
                emailRef.current.style.border = '2px solid red'
                passwordRef.current.style.border = '2px solid red'
                alert('Email or Password Wrong')
            }
        })
    };

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    return(
        <div className="login">
        
            <form className="login-form" onSubmit={handleLogin}>
                <input className="login-email" ref={emailRef} type="email" required placeholder="enter your email" />
                <input className="login-pass" ref={passwordRef} type="password" required placeholder="enter your password" />
                <button className="btn btn-success" type="submit">Submit</button>
            </form>

        
        </div>
    )
}