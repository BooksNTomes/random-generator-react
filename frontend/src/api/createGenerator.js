/* eslint-disable no-unused-vars */
const PORT = import.meta.env.VITE_API_PORT;

// export default 
const createGenerator = async (generatorParameters) => {
    const response = await fetch(``, 
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