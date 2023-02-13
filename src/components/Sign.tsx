import { Form } from './Form';
import { registerUser } from '../store/slices/resumeSlice';
import { useAppDispatch } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import React from "react";

function Sign() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {
        dispatch(registerUser(email, password));
        navigate('/');
    }

    return (
        <Form title="Register" handleClick={handleRegister}/>
    )
}

export default Sign;