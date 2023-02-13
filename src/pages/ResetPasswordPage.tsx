import React from 'react';
import { Link } from "react-router-dom";
import ResetPassword from "../components/ResetPassword";
import { CContainer } from "@coreui/react";

function ResetPasswordPage() {
    return (
        <CContainer sm>
            <h2>Reset your password</h2>
            <ResetPassword/>
            <p>
                Or <Link to="/register">register</Link>
            </p>

            <p>
                Or <Link to="/login">login</Link>
            </p>
        </CContainer>
    );
}

export default ResetPasswordPage;