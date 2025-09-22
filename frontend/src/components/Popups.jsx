import '../css/index.css'
import { useRef, useState } from "react"
import { CreateForm, UpdateForm } from "./Forms"
import { NavCrumbs } from './Layout'

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

export function BlankPopup({children, active}) {
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
                    </div>
                </div>
                ) :
                (
                  <div></div>  
                )}
        </>
    )
}


export function CreateGeneratorPopup({closeHandler, previewHandler, createGeneratorHandler}) {
    return(
        <>
            <BlankPopup>
                <CreateForm 
                closeHandler={closeHandler} 
                previewHandler={previewHandler}
                createGeneratorHandler={createGeneratorHandler}>
                </CreateForm>
            </BlankPopup>
        </>
    )
}

export function DeleteGeneratorPopup({active, deleteHandler, closeHandler}){
    return(
        <>
            <BlankPopup
            active={active}>
                <div className="w-[400px] h-[100px]">
                    <h3>Delete Generator?</h3>
                    <div className="flex gap-10 justify-end">
                        <button onClick={deleteHandler}>Yes</button>
                        <button onClick={closeHandler}>No</button>
                    </div>
                </div>
            </BlankPopup>
        </>
    )
}

export function PreviewGeneratorPopup({active, closeHandler, generator}){

    return(
    <>
        <Popup
            active={active}
            closeHandler={closeHandler}>
            <div className='pb-20 browser-size m-auto'>
                <NavCrumbs navTarget={generator.name}></NavCrumbs>
                <h1>{generator.name}</h1>
                <p className='ptag-xl mb-5'>{generator.description}</p>

                {generator.type === 'NUMBER' && 
                <NumbersGenerator generator={generator}></NumbersGenerator>}

                {generator.type === 'STRING' &&
                <StringsGenerator generator={generator}></StringsGenerator>}
            </div>
        </Popup>
    </>
    )
}

export function UpdateGeneratorPopup({generator, closeHandler}){
    
    const previewHandler = () => {}

    return(
        <>
            <BlankPopup>
                <UpdateForm
                generator={generator}
                closeHandler={closeHandler}
                previewHandler={() => previewHandler()}
                updateHandler={updateHandler}>
                </UpdateForm>
            </BlankPopup>
        </>
    )
}