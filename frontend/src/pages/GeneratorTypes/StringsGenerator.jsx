"use client";
import { useState, useEffect, useRef } from "react";
import ListPopup from "../../components/Popups/ListPopup";

export default function StringsGenerator({generator}) {
    const [algorithmState, setAlgorithmState] = useState("default");
    const [amtState, setAmtState] = useState(1);
    const [genState, setGenState] = useState('');
    const [listState, setListState] = useState(generator.list);

    const listDialogRef = useRef(null);
    const initialList = generator.list;

    const listHandler = (event, index) => {
        let newList = listState.slice();
        if (!event.target.checked){
            (newList).splice(index, 1, '');
        }
        else if (event.target.checked) {
            (newList).splice(index, 1, initialList[index]);
        }
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
        <div className="flex gap-5 browser-size m-auto p-5 border-1 border-black/15 rounded-[5px] shadow-md">
            <dialog ref={listDialogRef} className="w-[300px] h-[300px] p-[30px] m-auto">
                {initialList && initialList.map((entry, index) => (
                    <div key={index}>
                        <span>
                            <input type="checkbox" onChange={event => listHandler(event, index)} name={entry} defaultChecked={listState[index] 
                            !== '' ? true : false}/>
                            <label htmlFor={entry}>{entry}</label>
                        </span>
                    </div>
                ))}
                <button className="mt-[10px] border-1 border-black rounded p-[10px]" onClick={() => listDialogRef.current?.close()}>Close</button>
            </dialog>
            <div className="w-1/2">
                <h2>Config</h2>
                <div className="p-5 h-[350px] border-1 border-black/5 rounded-[5px] shadow-sm">
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
                                List: 
                            </div>
                            <div>
                                <button className="p-1 rounded border-1 border-black/10 bg-[hsl(0,0%,95%)]  hover:bg-[hsl(0,0%,90%)]" 
                                onClick={() => {listDialogRef.current?.showModal()}}>Open List</button>
                            </div>
                        </h4>

                        <h4 className="mb-5 flex">
                            <div className="flex-grow">
                                Amount: 
                            </div>
                            <span>
                                <input className="border-1 border-black/10 pl-2 pr-1 bg-[hsl(0,0%,95%)]  hover:bg-[hsl(0,0%,90%)]" 
                                type="number" min="1" defaultValue={1}
                                onChange={event => amtHandler(event)}
                                ></input>
                            </span>
                        </h4>
                    </div>
                </div>
            </div>


            <div className="w-1/2">
                <h2>Output</h2>
                <div className="p-5 h-[350px] border-1 border-black/5 rounded-[5px] shadow-sm">
                    <h3>{genState}</h3>
                </div>
                <button className="absolute bottom-10 right-64.5 w-5/16 p-3 border-1 border-black/25 rounded-[5px] shadow-sm hover:bg-[hsl(0,0%,90%)] active:bg-[hsl(0,0%,80%)] bg-white"
                        onClick={() => genHandler()}>
                    Generate
                </button>
            </div>
        </div>
    )
}