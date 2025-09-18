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

export const numbersHandler = () => {
    const [minState, setMinState] = useState(1);
    const [maxState, setMaxState] = useState(100);
    const [genState, setGenState] = useState('0');

    const genHandler = () => {
        let newGenState = ``
        for (let i = 0; i < amountState; i++){
            if (algorithmState === "default"){
                if (generator.validation !== "FLOAT"){
                    newGenState += `${(Math.floor(Math.random() * (maxState - minState + 1) + minState))} `;
                }
                else {
                    newGenState += `${(Math.random() * (maxState - minState + 1) + minState)} `;
                }
            }
        }
        setGenState(newGenState)
    }

    return {genState, setGenState, genHandler};
}

export const stringsHandler = () => {
    const [genState, setGenState] = useState('');
    const genHandler = () => {
        if (listState.length < 1){
            setGenState("Empty List");
        }
        else{
            let newGenState = ``
            for (let i = 0; i < amtState; i++){
                if (algorithmState === "default"){
                    let stateCandidate = listState[Math.floor(Math.random() * (listState.length - 0 + 1) + 0)];
                    while (stateCandidate === '' || stateCandidate === undefined) {
                        stateCandidate = listState[Math.floor(Math.random() * (listState.length - 0 + 1) + 0)];
                    }
                    newGenState += (stateCandidate) + (i+1 < amtState ? ', ' : ' ');
                }
            }
            setGenState(newGenState);
        }
    }
    return {genState, setGenState, genHandler};
}