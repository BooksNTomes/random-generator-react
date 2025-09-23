import axios from 'axios';
const URL = import.meta.env.VITE_API_BACKEND_URL;

export async function login(credentials){

    try{
        const response = await axios.post(
            `${URL}/admin/login`,
            credentials,
            {
                headers: {"Content-Type": "application/json"},
                withCredentials: true
            }, 
        );

        return response.data
    }catch(error){
        throw new Error(error.response.data.message)
    }
}

export async function authenticate(token){
    try{
        const response = await axios.get(
            `${URL}/admin/authenticate`,
            {headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }}
        );

        return response.data
    }catch(error){
        throw new Error(error.response.data.message)
    }
}

export async function refresh(){
    try{
        const response = await axios.get(
            `${URL}/admin/refresh`,
            {
                withCredentials: true
            }
        );

        return response.data
    }catch(error){
        throw new Error(error.response.data.message)
    }
}

export async function register(username, password){
    try{
        const response = await axios.post(
            `${URL}/admin/register`,
            {username, password},
            {
                headers: {"Content-Type": "application/json",}
            }
        );

        return response.data
    }catch(error){
        throw new Error(error.response.data.message)
    }
}