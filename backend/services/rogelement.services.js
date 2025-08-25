// Rogelement Specific Services

export const validRogelement = (rogelement) => {
    if (!rogelement.name || !rogelement.description || !rogelement.listType || !rogelement.list){
        return false;
    }
    else {
        return true;
    }
}