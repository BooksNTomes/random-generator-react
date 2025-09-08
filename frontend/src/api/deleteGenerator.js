/* eslint-disable no-unused-vars */

export const deleteGenerator = async (generatorID) => {
    const response = await fetch(`/${generatorID}`, {
        method: "DELETE",
    });
};