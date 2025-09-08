/* eslint-disable no-unused-vars */

const updateGeneratorTest = async (generatorID, generatorParameters) => {
    const response = await fetch(`/${generatorID}`, {
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