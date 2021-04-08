import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import './Buttons.css';
import firebase from "firebase";
import "firebase/auth";

function LoginButton(props) {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/about'), [history]);
    const loginHandleClick = (() => {
        firebase.auth().signInWithEmailAndPassword(props.email, props.password)
            .then((userCredential) => {
                let user = userCredential.user;
                console.log(user);
                handleOnClick();
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(errorCode);
                alert(errorMessage);
            });
    });

    return (
        <button onClick={loginHandleClick} className="Login-Button" type="submit">
            {props.name}
        </button>
    );
}

export default LoginButton;