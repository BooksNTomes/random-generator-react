import axios from 'axios';
const URL = import.meta.env.VITE_API_BACKEND_URL;

export async function getGenerators(token){

    try{
        const response = await axios.get(
            `${BACKEND_URL}/generators`,
            {
                headers: {"Authorization": `Bearer ${token}`},
                withCredentials: true
            }, 
        );

        return response.data
    }catch(error){
        throw new Error(error.response.data.message)
    }
}

export async function getGenerator(token, id){

    try{
        const response = await axios.get(
            `${BACKEND_URL}/generators/${id}`,
            {
                headers: {"Authorization": `Bearer ${token}`},
                withCredentials: true
            }, 
        );

        return response.data
    }catch(error){
        throw new Error(error.response.data.message)
    }
}

export async function createGenerator(token, newGenerator){
    try{
        const response = await axios.post(
            `${BACKEND_URL}/generators-manager/create`,
            {
                name: newGenerator.name,
                description: newGenerator.description,
                image: newGenerator.image,
                type: newGenerator.type,
                list: newGenerator.list,
                validation: newGenerator.validation,
                published: newGenerator.published
            },
            {
                headers: {"Authorization": `Bearer ${token}`, "Content-Type": 'application/json'},
                withCredentials: true
            }, 
        );

        return response.data
    }catch(error){
        throw new Error(error.response.data.message)
    }
}

export async function updateGenerator(token, id, editedGenerator){
    try{
        const response = await axios.put(
            `${BACKEND_URL}/generators-manager/${id}`,
            {
                name: editedGenerator.name,
                description: editedGenerator.description,
                image: editedGenerator.image,
                type: editedGenerator.type,
                list: editedGenerator.list,
                validation: editedGenerator.validation,
                published: editedGenerator.published
            },
            {
                headers: {"Authorization": `Bearer ${token}`, "Content-Type": 'application/json'},
                withCredentials: true
            }, 
        );

        return response.data
    }catch(error){
        throw new Error(error.response.data.message)
    }
}


export async function deleteGenerator(token, id){
    try{
        const response = await axios.delete(
            `${BACKEND_URL}/generators-manager/${id}`,
            { project_id },
            {
                headers: {"Authorization": `Bearer ${token}`, "Content-Type": 'application/json'},
                withCredentials: true
            }, 
        );

        return response.data
    }catch(error){
        throw new Error(error.response.data.message)
    }
}



// // Old / To be Refactored
// /** GET */
// export const retrieveGenerators =  async () => {
//     return await fetch(`${URL}/generators/`, 
//         {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"
//             }
//         }
//     );
// }

// export const retrieveGenerator =  async (id) => {
//     return await fetch(`${URL}/generators/${id}`, 
//         {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"
//             }
//         }
//     );
// }

// /** POST */
// const createGenerator = async (generatorParameters) => {
//     return await fetch(`${URL}/generators-manager/create`, 
//         {
//             method: "POST",
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name: generatorParameters.name,
//                 description: generatorParameters.description,
//                 image: generatorParameters.image,
//                 type: generatorParameters.type,
//                 list: generatorParameters.list,
//                 validation: generatorParameters.validation,
//                 published: generatorParameters.published}),
//         }
//     );
// };

// /** PUT */
// export const updateGenerator = async (generatorID, generatorParameters) => {
//     return await fetch(`${URL}/generators-manager/${generatorID}`, {
//         method: "PUT",
//         headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"
//             },
//         body: JSON.stringify({
//                 name: generatorParameters.name,
//                 description: generatorParameters.description,
//                 image: generatorParameters.image,
//                 type: generatorParameters.type,
//                 list: generatorParameters.list,
//                 validation: generatorParameters.validation,
//                 published: generatorParameters.published}),
//     });
// };

// /** DELETE */
// export const deleteGenerator = async (generatorID) => {
//     return await fetch(`${URL}/generators-manager/${generatorID}`, {
//         method: "DELETE",
//     });
// };

