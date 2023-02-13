import { useAppSelector } from "./redux-hooks";

export function useResume() {

    // @ts-ignore
    const {firstName, lastName, email, country, city, phone, job} = useAppSelector(state => state.resume);

    return {
        firstName,
        lastName,
        email,
        country,
        phone,
        city,
        job
    };
}