import '../css/index.css'
import { useRef, useState } from "react"
import { CreateForm } from "./Forms"

// TODO Layouting
export default function Popup({children, closeHandler, active}) {
    return (
        <>
            {active ? (
                <div>
                    <div className="overlay"
                    onClick={() => console.log("Overlay")}
                    ></div>

                    <div className="z-20 absolute border-black border-1 
                                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                    bg-white p-5"
                    >{children}

                        <button className="mt-[10px] border-1 border-black rounded p-[10px]"
                        onClick={() => closeHandler()}
                        >Close</button>
                    </div>
                </div>
                ) :
                (
                  <div></div>  
                )}
        </>
    )
}



export function CreateGeneratorPopup({closeHandler, createGeneratorHandler}) {
    return(
        <>
            <Popup>
                <CreateForm closeHandler={closeHandler} 
                createGeneratorHandler={createGeneratorHandler}>
                </CreateForm>
            </Popup>
        </>
    )
}

export function DeleteGeneratorPopup({closeHandler}){
    return(
        <>
            <Popup>
                <div className="w-[400px] h-[100px]">
                    <h3>Delete Generator?</h3>
                    <div className="flex gap-10 justify-end">
                        <button>Yes</button>
                        <button onClick={closeHandler}>No</button>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export function PreviewGeneratorPopup(){

    return(
    <>

    </>
    )
}

export function UpdateGeneratorPopup({generator, closeHandler}){
    return(
        <div className="flex flex-col gap-10">
            <h3>Generators &gt; {generator.name}</h3>
            <div className="flex gap-5">
                <div className="flex flex-col">
                    <label>Name</label>
                    <input className="border-1 border-black min-w-[400px] " type="text" defaultValue={generator.name}></input>
                    <label>Description</label>
                    <textarea className="border-1 border-black min-w-[400px] min-h-[125px] max-h-[125px]"  defaultValue={generator.description}></textarea>
                </div>
                <div className="flex flex-col min-w-[200px]">
                    <label>Image</label>
                    {/**TODO:  */}
                    <input className="" type="file" defaultValue={generator.image}></input>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="flex flex-col gap-1">
                    <label>Type</label>
                    <select className="border-1 border-black/30 p-1">
                        <option>number</option>
                        <option>string</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label>List</label>
                    <button className="border-1 border-black/30 p-1">Open List</button>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Validation</label>
                    <select className="border-1 border-black/30 p-1">
                        <option>integer</option>
                        <option>float</option>
                    </select>
                </div>
            </div>
            <div className="flex gap-10 justify-end">
                <button onClick={closeHandler}>Cancel</button>
                <button>Preview</button>
                <button>Update</button>
            </div>
        </div>
    )
}