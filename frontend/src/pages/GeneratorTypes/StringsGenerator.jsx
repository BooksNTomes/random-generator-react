"use client";
import { useState, useEffect, useRef } from "react";
import { Config, Output } from "../../components/GeneratorComponents";
import ListPopup from "../../components/Popups/ListPopup";

// TODO: Refactor Popup Implementation

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
    const genHandler = () => {
        if (listState.length < 1){
            setGenState("Empty List");
        }
        else{
            let newGenState = ``
            for (let i = 0; i < amtState; i++){
                if (algorithmState === "default"){
                    let stateCandidate = listState[Math.floor(Math.random() * (listState.length - 0 + 1) - 1)];
                    while (stateCandidate === '' || stateCandidate === undefined) {
                        stateCandidate = listState[Math.floor(Math.random() * (listState.length - 0 + 1) + 0)];
                    }
                    newGenState += (stateCandidate) + (i+1 < amtState ? ', ' : ' ');
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

            <Config algorithmHandler={algorithmHandler} amountHandler={amtHandler}>
                <h4 className="mb-5 flex">
                    <div className="flex-grow">
                        List: 
                    </div>
                    <div>
                        <button className="p-1 rounded border-1 border-black/10 bg-[hsl(0,0%,95%)]  hover:bg-[hsl(0,0%,90%)]
                        w-[245px]" 
                        onClick={() => {listDialogRef.current?.showModal()}}>Open List</button>
                    </div>
                </h4>
            </Config>

            <Output genState={genState} genHandler={genHandler}></Output>
        </div>
    )
}