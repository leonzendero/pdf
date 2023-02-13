import { createSlice } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { doc, addDoc, collection, updateDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { IState } from "../../types/types";

const initialState: IState = {
    firstName: '',
    lastName: '',
    job: '',
    phone: '',
    country: '',
    city: '',
    email: ''
};

const resumeSlice = createSlice(
    {
        name: "resume",
        initialState,
        reducers: {
            setResumeDate(state, action) {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.job = action.payload.job;
                state.phone = action.payload.phone;
                state.country = action.payload.country;
                state.city = action.payload.city;
                state.email = action.payload.email;
            },
            removeResume(state) {
                state.firstName = null;
                state.lastName = null;
                state.job = null;
                state.phone = null;
                state.country = null;
                state.city = null;
                state.email = null;
            },
        },
    }
);

export const registerUser = (email: string, password: string) => async (dispatch: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(async ({user}) => {
                const collectionDoc = collection(db, user.uid);
                const docRef = await addDoc(collectionDoc, initialState)
                    .catch(console.error);
                dispatch(setResumeDate(docRef));
            }
        ).catch(console.error);
};

export const loginUser = (email: string, password: string) => async (dispatch: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(async ({user}) => {
            const docRef = collection(db, user.uid)
            const docSnap = await getDocs(docRef)
            console.log(docSnap)
            // TODO: change logic dispatch
            dispatch(setResumeDate(docSnap.docs[0].data()));

        }).catch(console.error);
};

export const updateData = (data: IState) => (dispatch: any) => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const docRef = doc(db, user.uid, 'qKc0NIZfvU71hsDX0bM1')
            const docSnap = await updateDoc(docRef, data);
            console.log(docSnap, 'docRef')
            dispatch(setResumeDate(docRef));
        } else {
            console.log('test 2')
            // User is signed out
            // ...
        }
    });
}

export const sendPasswordReset = async (email: string) => {
    const auth = getAuth();
    try {
        await sendPasswordResetEmail(auth, email);
        // modal
    } catch (err) {
        console.error(err);
    }
};

export const logoutUser = async () => {
    const auth = getAuth();
    await signOut(auth).then(async () => {
        // modal
    }).catch(console.error);
};

export const {setResumeDate, removeResume} = resumeSlice.actions;

export default resumeSlice.reducer;