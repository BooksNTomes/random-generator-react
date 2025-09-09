import dotenv from 'dotenv';
// Debug Config
dotenv.config();

// Generator Services
export const validGenerator = (generator) => {
    const INVALIDATORS = {
        NUMBER_LIST: (generator.type === "NUMBER" && generator.list.length > 0),
        STRING_LIST: (generator.type === "STRING" && generator.list.length === 0),
        NUMBER_VALIDATION: (generator.type === "NUMBER" && (generator.validation !== "INTEGER" && generator.validation !== "FLOAT")),
        STRING_VALIDATION: (generator.type === "STRING" && generator.validation),
        TYPE: (generator.type !== "NUMBER" && generator.type !== "STRING"),
    }

    if (INVALIDATORS[NUMBER_LIST] ||
        INVALIDATORS[STRING_LIST] ||
        INVALIDATORS[NUMBER_VALIDATION] ||
        INVALIDATORS[STRING_VALIDATION] ||
        INVALIDATORS[TYPE]) {
    
        if (process.env.DEBUG !== 0){
            console.log(`INVALIDATORS[NUMBER_LIST]: ${INVALIDATORS[NUMBER_LIST]}`);
            console.log(`INVALIDATORS[STRING_LIST]: ${INVALIDATORS[STRING_LIST]}`);
            console.log(`INVALIDATORS[NUMBER_VALIDATION]: ${INVALIDATORS[NUMBER_VALIDATION]}`);
            console.log(`INVALIDATORS[STRING_VALIDATION]: ${INVALIDATORS[STRING_VALIDATION]}`);
            console.log(`INVALIDATORS[TYPE]: ${INVALIDATORS[TYPE]}`);
        }
        return false;
    }

    return true;
}