import React, { FC } from 'react';
import {
    CCol,
    CFormInput, CRow
} from "@coreui/react";
import { SocialInputType } from "./Social";

interface EmploymentItemProps {
    appointment: string;
    source: string;
    data: SocialInputType;
    handleUpdateItem: (newData: SocialInputType) => void;
}

const SocialItem: FC<EmploymentItemProps> = ({source, appointment, data, handleUpdateItem}) => {

    const handleInputChange = (newValue: string, name: string) => {
        const newItemValue: SocialInputType = Object.assign({}, data);
        newItemValue[name as keyof typeof data] = newValue;
        handleUpdateItem(newItemValue);
    }

    return (
        <React.Fragment>
            <CRow>
                <CCol>
                    <CFormInput
                        type="text"
                        label={source}
                        defaultValue={data.input1Value}
                        onChange={(event) => handleInputChange(event.target.value, 'input1Value')}
                    />
                </CCol>
                <CCol>
                    <CFormInput
                        type="text"
                        label={appointment}
                        defaultValue={data.input2Value}
                        onChange={(event) => handleInputChange(event.target.value, 'input2Value')}
                    />
                </CCol>
            </CRow>
        </React.Fragment>
    );
}

export { SocialItem };
