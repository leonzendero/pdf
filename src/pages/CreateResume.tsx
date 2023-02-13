import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import {
    CButton, CCol, CContainer,
    CForm,
    CFormInput,
    CFormTextarea, CImage, CRow
} from '@coreui/react';
import { Employment } from "../components/Employment";
import { Social } from "../components/Social";
// @ts-ignore
import imageSrc from '../images/6f74ae2516c3d2718b68bdaced012969.jpg';
import { updateData } from "../store/slices/resumeSlice";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";

const CreateResume = () => {
    const isAuth = getAuth();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [job, setJob] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const dispatch: any = useDispatch();

    const handleCreateUser = async () => {
        await dispatch(updateData(
            {
                firstName, lastName, job, phone, email, country, city
            }
        ));
        navigate('/pdf')
    }

    // useEffect(() => {
    //     const {firstName, lastName, email, country, city, phone, job} = useResume();
    //     setFirstName(firstName);
    // }, [isAuth]);

    return isAuth ? (
        <CContainer sm>
            <div>
                <CRow>
                    <CCol xs={6}>
                        <CForm>
                            <h3>Personal Details</h3>
                            <CRow className="mb-3">
                                <CCol md sm="auto">
                                    <CFormInput
                                        type="text"
                                        id="basic-addon1"
                                        label="Wanted Job Title"
                                        placeholder="Back-end Developer"
                                        aria-describedby="basic-addon1"
                                        defaultValue={job}
                                        onChange={(event) => {
                                            setJob(event.target.value)
                                        }}
                                    />
                                </CCol>
                                <CCol md sm="auto">
                                    <CFormInput
                                        type="text"
                                        id="basic-addon1"
                                        label="First Name"
                                        aria-describedby="basic-addon1"
                                        defaultValue={firstName}
                                        onChange={(event) => {
                                            setFirstName(event.target.value)
                                        }}
                                    />
                                </CCol>
                                <CCol md sm="auto">
                                    <CFormInput
                                        type="text"
                                        id="basic-addon2"
                                        label="Last Name"
                                        aria-describedby="basic-addon2"
                                        defaultValue={lastName}
                                        onChange={(event) => {
                                            setLastName(event.target.value)
                                        }}
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CCol md sm="auto">
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput3"
                                        label="Email"
                                        placeholder="e.g. name@example.com"
                                        text="Must be 8-20 characters long."
                                        aria-describedby="exampleFormControlInputHelpInline"
                                        defaultValue={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value)
                                        }}
                                    />
                                </CCol>
                                <CCol md sm="auto">
                                    <CFormInput
                                        type="text"
                                        id="basic-addon3"
                                        label="Phone"
                                        placeholder="000 999 888"
                                        text="Must be 8-20 characters long."
                                        aria-describedby="basic-addon3"
                                        defaultValue={phone}
                                        onChange={(event) => {
                                            setPhone(event.target.value)
                                        }}
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CCol md sm="auto">
                                    <CFormInput
                                        type="text"
                                        id="basic-addon4"
                                        label="Country"
                                        placeholder="Ukraine"
                                        aria-describedby="basic-addon4"
                                        defaultValue={country}
                                        onChange={(event) => {
                                            setCountry(event.target.value)
                                        }}
                                    />
                                </CCol>
                                <CCol md sm="auto">
                                    <CFormInput
                                        type="text"
                                        id="basic-addon5"
                                        label="City"
                                        placeholder="Kiev"
                                        aria-describedby="basic-addon5"
                                        defaultValue={city}
                                        onChange={(event) => {
                                            setCity(event.target.value)
                                        }}
                                    />
                                </CCol>
                            </CRow>
                            <CFormTextarea className="mb-3"
                                           id="exampleFormControlTextarea1"
                                           label="Professional Summary"
                                           placeholder="e.g. Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills."
                                           rows={3}
                            ></CFormTextarea>

                            <CFormTextarea className="mb-3"
                                           label="Hobbies"
                                           placeholder="e.g. What do you like?"
                                           rows={3}
                            ></CFormTextarea>
                            <Employment title="Employment History" btnTitle="employment" place="Job Title"
                                        appointment="Employer"/>
                            <Employment title="Education" btnTitle="education" place="School"
                                        appointment="Degree"/>
                            <Social title="Websites & Social Links" btnTitle="link" source="Label"
                                    appointment="Link"/>
                            <Social title="Skills" btnTitle="skill" source="Skill" appointment="Level"/>
                            <Social title="Languages" btnTitle="language" source="language"
                                    appointment="Level"/>
                            <CButton className="mt-5" color="primary" size="lg"
                                     onClick={handleCreateUser}>Create</CButton>
                        </CForm>
                    </CCol>
                    <CCol xs={6}>
                        <CRow>
                            <CCol>
                                <CImage fluid rounded src={imageSrc}/>
                            </CCol>
                            <CCol>
                                <CImage fluid rounded src={imageSrc}/>
                            </CCol>
                            <CCol>
                                <CImage fluid rounded src={imageSrc}/>
                            </CCol>
                        </CRow>
                    </CCol>
                </CRow>
            </div>
        </CContainer>
    ) : (
        <Navigate to="/login"/>
    );
};

export default CreateResume;
