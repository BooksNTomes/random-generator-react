import dotenv from 'dotenv';

dotenv.config();
const URL = `${process.env.BACKEND_URL? process.env.BACKEND_URL : process.env.LOCAL_BACKEND_URL}${process.env.PORT}`
const header = {"Content-Type": "application/json"};
const sampleUser = {
    name: "Username",
    password: "Password"
}

export const sampleUserRun = (user) => {

}

export const loginSampleUser = async (credentials) => {
    return await fetch(``, credentials,
        {
            method: 'POST',
            headers:header,
            withCredentials:true,
        }
    )
}

