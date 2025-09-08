const PORT = import.meta.env.VITE_API_PORT;

export const retrieveGenerator =  async (id) => {
    return await fetch(`http://localhost:${PORT}/generators/${id}`, 
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
    );
}
