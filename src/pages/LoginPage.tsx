import React from 'react';
import { Link } from "react-router-dom";
import Login from "../components/Login";
import { CContainer } from "@coreui/react";

function LoginPage() {
    return (
        <CContainer sm>
            <h2>Login</h2>
            <Login/>
            <p>
                Or <Link to="/register">register</Link>
            </p>
        </CContainer>
    );
}

export default LoginPage;