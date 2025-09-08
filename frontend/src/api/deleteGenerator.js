/* eslint-disable no-unused-vars */
const PORT = import.meta.env.VITE_API_PORT;

export const deleteGenerator = async (generatorID) => {
    const response = await fetch(`/${generatorID}`, {
        method: "DELETE",
    });
};