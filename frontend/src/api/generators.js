const URL = import.meta.env.VITE_API_BACKEND_URL;

/** GET */
export const retrieveGenerators =  async () => {
    return await fetch(`${URL}/generators/`, 
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
    );
}

export const retrieveGenerator =  async (id) => {
    return await fetch(`${URL}/generators/${id}`, 
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
    );
}

/** POST */
const createGenerator = async (generatorParameters) => {
    return await fetch(`${URL}/generators-manager/create`, 
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: generatorParameters.name,
                description: generatorParameters.description,
                image: generatorParameters.image,
                type: generatorParameters.type,
                list: generatorParameters.list,
                validation: generatorParameters.validation,
                published: generatorParameters.published}),
        }
    );
};

/** PUT */

/** DELETE */
export const deleteGenerator = async (generatorID) => {
    return await fetch(`${URL}/generators-manager/${generatorID}`, {
        method: "DELETE",
    });
};

const updateGenerator = async (generatorID, generatorParameters) => {
    return await fetch(`${URL}/generators-manager/${generatorID}`, {
        method: "PUT",
        headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        // id: sampleID,
        body: JSON.stringify({
                name: generatorParameters.name,
                description: generatorParameters.description,
                image: generatorParameters.image,
                type: generatorParameters.type,
                list: generatorParameters.list,
                validation: generatorParameters.validation,
                published: generatorParameters.published}),
    });
};