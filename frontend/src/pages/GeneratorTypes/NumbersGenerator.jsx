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
        <div className="flex gap-5 p-5 h-[450px] border-1 border-black/15 rounded-[5px] shadow-md">
            <div className="w-1/2">
                <h2>Config</h2>
                <div className="p-5 h-[350px] border-1 border-black/5 rounded-[5px] shadow-sm">
                    <h4 className="mb-3 embolden">
                        Algorithm Config:
                    </h4>

                    <div className="ml-5">
                        <h4 className="mb-5 flex">
                        
                            <div className="flex-grow">
                                Algorithm: 
                            </div>
                            
                            <span>
                                <select className="border-1 border-black/5 rounded-[5px] p-1 hover:bg-black/2
                                                    w-[245px]"
                                        onChange={algorithmHandler}
                                        >
                                    <option value="default">Default - Math.random()</option>
                                </select>
                        </span>
                        
                        </h4>
                    </div>

                    <h4 className="mb-5 embolden flex">
                        <div className="flex-grow">
                            List Config: 
                        </div>
                        <div className="ml-10 embolden p-1 bg-black/20 ptag-sm min-w-[300px]">
                            this generator does not allow direct modification
                        </div>
                    </h4>

                    <div className="ml-5">
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
                        <h4 className="mb-5 flex">
                            <div className="flex-grow">
                                Amount: 
                            </div>
                            <div className="ml-5">
                                <input className="border-1 border-black/10 pl-2 pr-1 bg-[hsl(0,0%,95%)]  hover:bg-[hsl(0,0%,90%)]
                                w-[245px]" 
                                type="number" min={1} defaultValue={1} 
                                onChange={event => amtHandler(event)}
                                ></input>
                            </div>
                        </h4>
                    </div>
                </div>
            </div>


            <div className="w-1/2">
                <h2>Output</h2>
                <div className="p-5 h-[350px] border-1 border-black/5 rounded-[5px] shadow-sm">
                    <h3>{genState}</h3>
                </div>
            </div>
            <button className="absolute bottom-10 right-64.5 w-5/16 p-3 border-1 border-black/25 rounded-[5px] shadow-sm hover:bg-[hsl(0,0%,90%)] active:bg-[hsl(0,0%,80%)] bg-white"
                    onClick={() => genHandler()}>
                Generate
            </button>
        </div>
    )
}