import { useState } from "react";
import { Output, Config } from "../../components/GeneratorComponents";

export default function NumbersGenerator({generator}) {

    const [minState, setMinState] = useState(1);
    const [maxState, setMaxState] = useState(100);
    const [genState, setGenState] = useState('0');
    const [amtState, setAmtState] = useState(1);
    const [algorithmState, setAlgorithmState] = useState("default");
    const minAsNumber = Number(minState);
    const maxAsNumber = Number(maxState);
    
    const minHandler = (event) => {
        let value = event.target.value;
        if (generator.validation !== "FLOAT"){
            value = Math.floor(value);
        }
        setMinState(value);
    }
    const maxHandler = (event) => {
        let value = event.target.value;
        if (generator.validation !== "FLOAT"){
            value = Math.floor(value);
        }
        setMaxState(value);
    }

    const amtHandler = (event) => {
        let amount = event.target.value;
        setAmtState(amount);
    }
    const algorithmHandler = (event) => {
        let option = event.target.value;
        setAlgorithmState(option);
    }
    function genHandler(){
        if (amtState == 1){
            if (algorithmState === "default"){
                if (generator.validation !== "FLOAT"){
                    setGenState(Math.floor(Math.random() * (maxState - minState + 1) + minState));
                }
                else {
                    setGenState(Math.random() * (maxState - minState + 1) + minState);
                }
            }
        }
        else {
            let newGenState = ``
            for (let i = 0; i < amtState; i++){
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
    }

    return (
        <div className="flex gap-5 p-5 h-[450px] border-1 border-black/15 rounded-[5px] shadow-md">
            <Config algorithmHandler={algorithmHandler} amountHandler={amtHandler}>
                <h4 className="mb-5 flex">
                    <div className="flex-grow">
                        Min: 
                    </div>
                    <div className="ml-5">
                        <input className="border-1 border-black/10 pl-2 pr-1 bg-[hsl(0,0%,95%)]  hover:bg-[hsl(0,0%,90%)]
                        w-[245px]" type="number" 
                        defaultValue={minAsNumber}
                        max={maxAsNumber}
                        onChange={e => minHandler(e)}></input>
                    </div>
                </h4>
                <h4 className="mb-5 flex">
                    <div className="flex-grow">
                        Max: 
                    </div>
                    <div className="ml-5">
                        <input className="border-1 border-black/10 pl-2 pr-1 bg-[hsl(0,0%,95%)]  hover:bg-[hsl(0,0%,90%)]
                        w-[245px]" type="number" 
                        defaultValue={maxAsNumber}
                        min={minAsNumber}
                        onChange={e => maxHandler(e)}></input>
                    </div>
                </h4>
            </Config>
            
            <Output genState={genState} genHandler={genHandler}></Output>
        </div>
    )
}