import React from 'react';
import { Link } from "react-router-dom";
import Sign from "../components/Sign";
import { CContainer } from "@coreui/react";

function RegisterPage() {
    return (
        <CContainer sm>
            <h2>Register</h2>
            <Sign/>
            <p>
                Already have an account? <Link to="/login">Sigh in</Link>
            </p>
        </CContainer>
    );
}

export default RegisterPage;