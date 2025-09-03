import {useState} from 'react';

export default function GeneratorNumbers({generator}) {

    const [minState, setMinState] = useState(1);
    const [maxState, setMaxState] = useState(100);
    const [genState, setGenState] = useState(0);
    const [amtState, setAmtState] = useState(1);
    const [algorithmState, setAlgorithmState] = useState("default");
    
    const minHandler = (event) => {
        let value = event.value;
        if (generator.validation !== "float"){
            value = Math.floor(value);
        }
        setMinState(value);
    }
    const maxHandler = (event) => {
        let value = event.value;
        if (generator.validation !== "float"){
            value = Math.floor(value);
        }
        setMaxState(value);
    }
    const amtHandler = (event) => {
        let amount = event.value;
        setAmtState(amount);
    }
    const algorithmHandler = (event) => {
        let option = event.value;
        setAlgorithmState(option);
    }
    function genHandler(){
        for (let i = 0; i < amtState; i++){
            if (algorithmState === "default"){
                setGenState(Math.random() * (maxState - minState + 1) + minState)
            }
        }
    }

    return (
        <div className="flex gap-5 browser-size m-auto p-5 border-1 border-black/15 rounded-[5px] shadow-md full-bottom">
            <div className="w-1/2">
                <h2>Config</h2>
                <div className="p-5 border-1 border-black/5 rounded-[5px] shadow-sm">
                    <h4 className="mb-3 embolden">
                        Algorithm Config:
                    </h4>


                    <div className="ml-5">
                        <h4 className="mb-5">Algorithm: <span>
                            <select className="border-1 border-black/5 rounded-[5px] p-1 hover:bg-black/2"
                                    onChange={algorithmHandler}>
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
                            <input type="number" onChange={minHandler}>{minState}</input>
                            
                        </span></h4>
                        <h4 className="mb-5">Max: <span>
                            <input type="number" onChange={maxHandler}>{maxState}</input>

                        </span></h4>
                        <h4 className="mb-5">Amount: <span>
                            <select className="border-1 border-black/5 rounded-[5px] p-1 hover:bg-black/2">
                                <input type="number" min="1" onChange={amtHandler}></input>
                            </select>
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
                        onClick={genHandler()}>
                    Generate
                </button>
            </div>
        </div>
    )
}