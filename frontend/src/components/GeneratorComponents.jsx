import { useEffect } from 'react'
import {algorithms} from '../constants/generator.constants.js'

export function Output({genState, genHandler}){
    return (
        <>
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
        </>
    )
}

export function Config({children, algorithmHandler, amountHandler, generator}){

    // useEffect(() => {
    //     console.log(children)
    // },[])

    return(
        <>
            <div className="w-1/2">
                <h2>Config</h2>
                <div className="p-5 h-[350px] border-1 border-black/5 rounded-[5px] shadow-sm">
                    <AlgorithmConfig
                        algorithmHandler={algorithmHandler}
                    ></AlgorithmConfig>
                    <AmountConfig
                        amountHandler={amountHandler}
                    ></AmountConfig>
                    <ListConfig listChildren={children}>
                         {/** Insert Children Elements Based on Generator Type Here */}
                    </ListConfig>
                </div>
            </div>
        </>

    )
}

// Generic Generator Components, present in any generator type
export function AlgorithmConfig({algorithmHandler, algorithmList=algorithms}){
    return (
        <>
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
                            {algorithmList.map(
                                (algorithm, index) => (<option key={index} value={algorithm.value}>{algorithm.name}</option>)  
                            )}
                        </select>
                    </span>
                </h4>
            </div>
        </>
    )
}

export function ListConfig({listChildren, message="this generator does not allow direct modification"}){
    // useEffect(() => {
    //     console.log(listChildren)
    // },[])

    return(
        <>
            <h4 className="mb-5 embolden flex">
                <div className="flex-grow">
                    List Config: 
                </div>
                <div className="ml-10 embolden p-1 bg-black/20 ptag-sm min-w-[300px]">
                    {message}
                </div>
            </h4>
            <div className="ml-5">
                {listChildren}
            </div>
        </>
    )
}

export function AmountConfig({amountHandler, amount=1}){
    return (
        <>
            <h4 className="ml-5 mb-5 flex">
                <div className="flex-grow">
                    Amount: 
                </div>
                <span>
                    <input className="border-1 border-black/10 pl-2 pr-1 bg-[hsl(0,0%,95%)]  hover:bg-[hsl(0,0%,90%)]
                    w-[245px]" 
                    type="number" min="1" defaultValue={amount}
                    onChange={event => amountHandler(event)}
                    ></input>
                </span>
            </h4>
        </>
    )
}
