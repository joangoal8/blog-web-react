
import React, {useState} from "react";
import logo from "../assets/image_logo_castell_daro.jpeg";
import '../App.css';
import './Login.css';
import LoginButton from '../components/LoginButton'

function Login() {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    return (
        <div className="Login">
            {
                token ? (
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Login
                        </a>
                    </header>
                ) : (
                    <div className="Login-Wrapper">
                        <div className="Login-Box">
                            <img src={logo} className="Login-logo" alt="logo" />
                            <div className="Login-Row">
                                <div className="Login-Input-Wrapper">
                                    <input onChange={event => setEmail(event.target.value)} type="email" className="Login-Input" placeholder="Email"/>
                                    <input onChange={event => setPwd(event.target.value)} type="password" className="Login-Input" placeholder="Password"/>
                                </div>
                            </div>
                            <LoginButton name="Sign in" email={email} password={pwd}/>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default Login;