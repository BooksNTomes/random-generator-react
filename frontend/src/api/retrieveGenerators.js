const PORT = import.meta.env.VITE_API_PORT;

export const retrieveGenerators =  async () => {
    return await fetch(`http://localhost:${PORT}/generators/`, 
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
    );
}
