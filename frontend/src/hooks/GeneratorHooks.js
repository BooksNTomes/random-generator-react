import { useState } from "react";

export const useDefaults = () => {
    const [amountState, setAmountState] = useState(1);
    const [algorithmState, setAlgorithmState] = useState("default");

    const amountHandler = (event) => {
        let amount = event.target.value;
        setAmountState(amount);
    }
    
    const algorithmHandler = (event) => {
        let option = event.target.value;
        setAlgorithmState(option);
    }

    return {amountState, amountHandler, algorithmState, algorithmHandler}
}

export const useNumbers = (validation) => {
    const [minState, setMinState] = useState(1);
    const [maxState, setMaxState] = useState(100);

    const minAsNumber = Number(minState);
    const maxAsNumber = Number(maxState);
    
    const minHandler = (event) => {
        let value = event.target.value;
        if (validation !== "FLOAT"){
            value = Math.floor(value);
        }
        setMinState(value);
    }
    const maxHandler = (event) => {
        let value = event.target.value;
        if (validation !== "FLOAT"){
            value = Math.floor(value);
        }
        setMaxState(value);
    }

    return {minState, maxState, minHandler, maxHandler, minAsNumber, maxAsNumber};
}

export const useAppendMethods = () => {
    const append = (i, amountState) => {
        return i+1 < amountState ? '' : ' '
    }

    const appendComma = (i, amountState) => {
        return i+1 < amountState ? ', ' : ' '
    }

    return {append, appendComma};
}