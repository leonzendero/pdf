import { Navigate, useNavigate } from 'react-router-dom'
import { logoutUser } from "../store/slices/resumeSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import { Link } from "react-router-dom";
import { CContainer } from "@coreui/react";
import { getAuth } from "firebase/auth";

function HomePage() {

    const isAuth = getAuth();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return isAuth ? (
        <CContainer sm>
            <h1>Hi</h1>
            <Link to="/create-resume">
                <button type="button">
                    Create My PDF Resume
                </button>
            </Link>
            <button onClick={async () => {
                await dispatch((logoutUser));
                navigate('/login');
            }
            }>Log out from
            </button>
        </CContainer>
    ) : (
        <Navigate to="/login"/>
    )
}

export default HomePage;