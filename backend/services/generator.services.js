// Generator Specific Services
const DEBUG = 1;

// Validates if Generator Type and Related Parameters are Correct
export const validGenerator = (generator) => {
    // TODO : Add Validation Logs / Reasons
    if ((generator.type === "NUMBER" && generator.list.length > 0) ||
        (generator.type === "STRING" && generator.list.length === 0) ||
        (generator.type === "NUMBER" && (generator.validation !== "INTEGER" && generator.validation !== "FLOAT")) ||
        (generator.type === "STRING" && generator.validation) ||
        (generator.type !== "NUMBER" && generator.type !== "STRING")) {
        
            if (DEBUG){
                console.log((generator.type === "NUMBER" && generator.list.length > 0));
                console.log((generator.type === "STRING" && generator.list.length === 0));
                console.log((generator.type === "NUMBER" && (generator.validation !== "INTEGER" || generator.validation !== "FLOAT")));
                console.log((generator.type === "STRING" && generator.validation));
                console.log((generator.type !== "NUMBER" && generator.type !== "STRING"));
            }
            return false;
        }
    return true;
}