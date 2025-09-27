import { useEffect, useState } from "react";
import { Output, Config } from "../../components/GeneratorComponents.jsx";
import { useAppendMethods, useDefaults, useNumbers } from "../../hooks/useGeneratorHooks.js";

export default function NumbersGenerator({generator}) {

    const {amountState, amountHandler, algorithmState, algorithmHandler} = useDefaults();
    const {minState, maxState, minHandler, maxHandler, minAsNumber, maxAsNumber} = useNumbers(generator.validation);
    const [genState, setGenState] = useState('0');

    const {append, appendComma} = useAppendMethods();
    const appendMethod = generator.appendMethod === ',' ? appendComma : append;

    const genHandler = () => {
        let newGenState = ``
        for (let i = 0; i < amountState; i++){
            if (algorithmState === "default"){
                if (generator.validation !== "FLOAT"){
                    const stateCandidate = (Math.random() * (maxState - minState + 1) + minState);
                    newGenState += `${Math.floor(stateCandidate)}` + appendMethod(i, amountState);
                }
                else {
                    const stateCandidate = (Math.random() * (maxState - minState) + minState);
                    newGenState += `${stateCandidate}` + appendMethod(i, amountState);
                }
            }
        }
        setGenState(newGenState)
    }

    return (
        <div className="flex gap-5 p-5 h-[450px] border-1 border-black/15 rounded-[5px] shadow-md">
            <Config algorithmHandler={algorithmHandler} amountHandler={amountHandler}>
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