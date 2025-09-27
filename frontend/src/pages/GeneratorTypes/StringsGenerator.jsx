"use client";
import { useState, useEffect, useRef } from "react";
import { Config, Output } from "../../components/GeneratorComponents";
import { ListForm } from "../../components/Forms";
import Popup from "../../components/Popups";
import { useAppendMethods, useDefaults } from "../../hooks/GeneratorHooks";

export default function StringsGenerator({generator}) {
    const {amountState, amountHandler, algorithmState, algorithmHandler} = useDefaults();
    const [genState, setGenState] = useState('');
    const [activePopup, setActivePopup] = useState(false);
    const [listState, setListState] = useState(generator.list);
    
    const {append, appendComma} = useAppendMethods();
    const appendMethod = generator.appendMethod === ',' ? appendComma : append;
    
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

    const genHandler = () => {
        if (listState.length < 1){
            setGenState("Empty List");
        }
        else{
            let newGenState = ``
            for (let i = 0; i < amountState; i++){
                if (algorithmState === "default"){
                    let stateCandidate = listState[Math.floor(Math.random() * (listState.length - 0 + 1) - 1)];
                    while (stateCandidate === '' || stateCandidate === undefined) {
                        stateCandidate = listState[Math.floor(Math.random() * (listState.length - 0 + 1) + 0)];
                    }
                    newGenState += (stateCandidate) + (appendMethod(i, amountState));
                }
            }
            setGenState(newGenState);
        }
    }
    
    return (
        <div className="flex gap-5 browser-size m-auto p-5 border-1 border-black/15 rounded-[5px] shadow-md">
            <Popup closeHandler={() => setActivePopup(false) }
            active={activePopup}
            >
                <ListForm
                initialList={initialList}
                itemsList={listState}
                itemToggle={listHandler}>
                </ListForm>
            </Popup>

            <Config algorithmHandler={algorithmHandler} amountHandler={amountHandler}>
                <h4 className="mb-5 flex">
                    <div className="flex-grow">
                        List: 
                    </div>
                    <div>
                        <button className="p-1 rounded border-1 border-black/10 bg-[hsl(0,0%,95%)]  hover:bg-[hsl(0,0%,90%)]
                        w-[245px]" 
                        onClick={() => {
                            setActivePopup(true)
                            }}>Open List</button>
                    </div>
                </h4>
            </Config>
            <Output genState={genState} genHandler={genHandler}></Output>
        </div>
    )
}
