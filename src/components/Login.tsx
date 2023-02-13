import { Form } from './Form';
import { loginUser } from '../store/slices/resumeSlice';
import { useAppDispatch } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import React from "react";

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        dispatch(loginUser(email, password));
        navigate('/');
    }

    return (
        <div>
            <Form title="Login" handleClick={handleLogin}/>
            <button onClick={() => navigate('/reset-password')}>Don't remember your password?</button>
        </div>
    );
}

export default Login;