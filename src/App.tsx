import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateResume from "./pages/CreateResume";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import PdfPreviewPage from "./pages/PdfPreviewPage";

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/reset-password" element={<ResetPasswordPage/>}/>
            <Route path="/create-resume" element={<CreateResume/>}/>
            <Route path="/pdf" element={<PdfPreviewPage/>}/>
            {/*<Route path="*" element={<Navigate to="/login"/>}/>*/}
        </Routes>
    );
}

export default App;
