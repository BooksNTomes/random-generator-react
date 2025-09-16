import { useState } from "react";

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
        <div className="flex gap-5 p-5 border-1 border-black/15 rounded-[5px] shadow-md">
            <div className="w-1/2">
                <h2>Config</h2>
                <div className="p-5 border-1 border-black/5 rounded-[5px] shadow-sm">
                    <h4 className="mb-3 embolden">
                        Algorithm Config:
                    </h4>

                    <div className="ml-5">
                        <h4 className="mb-5">Algorithm: <span>
                            <select className="border-1 border-black/5 rounded-[5px] p-1 hover:bg-black/2"
                                    onChange={algorithmHandler}
                                    >
                                <option value="default">Default - Math.random()</option>
                            </select>
                        </span></h4>
                    </div>

                    <h4 className="mb-3 embolden">
                        List Config: 
                        <span className="embolden p-1 bg-black/20">
                            this generator does not allow direct modification
                        </span>
                    </h4>

                    <div className="ml-5">
                        <h4 className="mb-5">Min: <span>
                            <input type="number" 
                            defaultValue={minAsNumber}
                            max={maxAsNumber}
                            onChange={e => minHandler(e)}></input>
                            
                        </span></h4>
                        <h4 className="mb-5">Max: <span>
                            <input type="number" 
                            defaultValue={maxAsNumber}
                            min={minAsNumber}
                            onChange={e => maxHandler(e)}></input>

                        </span></h4>
                        <h4 className="mb-5">Amount: <span>
                            <input type="number" min={1} defaultValue={1} 
                            onChange={event => amtHandler(event)}
                            ></input>
                        </span></h4>
                    </div>
                </div>
            </div>


            <div className="w-1/2">
                <h2>Output</h2>
                <div className="p-5 h-7/10 border-1 border-black/5 rounded-[5px] shadow-sm">
                    <h3>{genState}</h3>
                </div>
                <button className="ml-12 p-3 w-4/5 border-1 border-black/25 rounded-[5px] shadow-sm hover:bg-black/2 active:bg-black/4"
                        onClick={() => genHandler()}>
                    Generate
                </button>
            </div>
        </div>
    )
}