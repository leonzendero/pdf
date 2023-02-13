import React from 'react';
import { CContainer } from "@coreui/react";
import PdfPreview from "../components/PdfPreview";

function PdfPreviewPage() {
    return (
        <CContainer sm>
            <h2>PDF</h2>
            <PdfPreview/>
        </CContainer>
    );
}

export default PdfPreviewPage;