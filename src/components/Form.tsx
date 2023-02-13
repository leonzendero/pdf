import React, { FC, useState } from 'react';

interface FormProps {
    title: string;
    handleClick: (email: string, password: string) => void;
}

const Form: FC<FormProps> = ({title, handleClick}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex flex-col w-1/4">
            <input className="border-2 mb-2" type="email" value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Email"/>
            <input className="border-2 mb-2" type="password" value={password}
                   onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button onClick={() => handleClick(email, password)}>{title}</button>
        </div>
    );
}

export {Form};