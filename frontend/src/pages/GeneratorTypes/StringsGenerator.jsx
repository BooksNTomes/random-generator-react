import { useState, useEffect } from "react";

export default function StringsGenerator({generator}) {
    const [algorithmState, setAlgorithmState] = useState("default");
    const [listState, setListState] = useState(generator.list);
    const [amtState, setAmtState] = useState(1);
    const [genState, setGenState] = useState('');
    const initialList = generator.list;

    const listHandler = (event, index) => {
        let newList = listState.slice();

        if (!event.target.checked){
            (newList).splice(index, 1, '');
        }
        else if (event.target.checked) {
            (newList).splice(index, 1, initialList[index]);
        }

        console.log(newList)
        setListState(newList);
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
                let stateCandidate = listState[Math.floor(Math.random() * (listState.length - 0 + 1) + 0)];
                while ( stateCandidate === '' ||
                        stateCandidate === undefined ||
                        stateCandidate === null){
                            stateCandidate = listState[Math.floor(Math.random() * (listState.length - 0 + 1) + 0)];
                        }
                setGenState(stateCandidate);
            }
        }
        else{
            let newGenState = ``
            for (let i = 0; i < amtState; i++){
                if (algorithmState === "default"){
                    let stateCandidate = listState[Math.floor(Math.random() * (listState.length - 0 + 1) + 0)];
                    while ( stateCandidate === '' ||
                            stateCandidate === undefined ||
                            stateCandidate === null){
                                stateCandidate = listState[Math.floor(Math.random() * (listState.length - 0 + 1) + 0)];
                            }
                    newGenState += (stateCandidate);
                    }
                }
            setGenState(newGenState);
        }
        
    }
    
    return (
        <div className="flex gap-5 browser-size m-auto p-5 border-1 border-black/15 rounded-[5px] shadow-md  full-bottom">
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
                        <h4 className="mb-5">List: <span>
                            <button>Open List</button>
                        </span></h4>

                        {initialList && initialList.map((entry, index) => (
                            <span key={index}>
                                <input type="checkbox" onChange={event => listHandler(event, index)} name={entry} defaultChecked={true}/>
                                <label htmlFor={entry}>{entry}</label>
                            </span>
                        ))}

                        <h4 className="mb-5">Amount: <span>
                            <input type="number" min="1" 
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