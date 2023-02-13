import { sendPasswordReset } from '../store/slices/resumeSlice';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function ResetPassword() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const handleClick = (email: string) => {
        sendPasswordReset(email);
        navigate('/login');
    }

    return (
        <div className="flex flex-col w-1/4">
            <input className="border-2 mb-2" type="email" value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Email"/>
            <button onClick={() => handleClick(email)}>Send Email</button>
        </div>
    );
}

export default ResetPassword;