import React from 'react';
import { useResume } from "../hooks/use-resume";

const PdfPreview = () => {

    const {firstName, lastName, email, country, city, phone, job} = useResume();

    return (
        <div>
            {firstName}
            {lastName}
            {email}
        </div>
    )
};

export default PdfPreview;