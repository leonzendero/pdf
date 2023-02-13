import React, { FC } from 'react';
import {
    CCol,
    CFormInput,
    CFormTextarea, CRow
} from "@coreui/react";
import { EmploymentInputType } from "./Employment";

interface EmploymentItemProps {
    place: string;
    appointment: string;
    data: EmploymentInputType;
    handleUpdateItem: (newData: EmploymentInputType) => void;
}

const EmploymentItem: FC<EmploymentItemProps> = ({place, appointment, data, handleUpdateItem}) => {

    const handleInputChange = (newValue: string, name: string) => {
        const newItemValue: EmploymentInputType = Object.assign({}, data);
        newItemValue[name as keyof typeof data] = newValue;
        handleUpdateItem(newItemValue);
    }

    return (
        <React.Fragment>
            <CRow className="mb-2">
                <CCol>
                    <CFormInput
                        type="text"
                        label={place}
                        defaultValue={data.input1Value}
                        onChange={(event) => handleInputChange(event.target.value, 'input1Value')}
                    />
                </CCol>
                <CCol>
                    <CFormInput
                        type="date"
                        label="Start Date"
                    />
                </CCol>
                <CCol>
                    <CFormInput
                        type="date"
                        label="End Date"
                    />
                </CCol>
            </CRow>
            <CRow className="mb-2">
                <CCol>
                    <CFormInput
                        type="text"
                        label={appointment}
                        defaultValue={data.input2Value}
                        onChange={(event) => handleInputChange(event.target.value, 'input2Value')}
                    />
                </CCol>
                <CCol>
                    <CFormInput
                        type="text"
                        label="City"
                        placeholder="Kiev"
                        defaultValue={data.input3Value}
                        onChange={(event) => handleInputChange(event.target.value, 'input3Value')}
                    />
                </CCol>
            </CRow>
            <CFormTextarea
                id="exampleFormControlTextarea1"
                label="Description"
                placeholder="e.g. Description"
                rows={3}
                text="Must be 8-20 words long."
            ></CFormTextarea>
        </React.Fragment>
    );
}

export { EmploymentItem };
