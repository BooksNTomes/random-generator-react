// Generator Specific Services

export const validGenerator = (generator) => {
    if (!generator.name || !generator.description || !generator.listType || !generator.list){
        return false;
    }
    else {
        return true;
    }
}