import {useState, useRef, useEffect} from 'react';

export function CreateForm() {

}

export function UpdateForm() {

}

export function DeleteForm() {

}

/*
const [generator, setGenerator] = useState({});
    const nameRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();
    const typeRef = useRef();
    const listRef = useRef();
    const validationRef = useRef();
    
    const handleChange = () => {
        const newGenerator = {
            name: nameRef.current?.value,
            description: descriptionRef.current?.value,
            image: '',
            type: typeRef.current?.value,
            list: [],
            validation: validationRef.current?.value
        }
        setGenerator(newGenerator);
    }

    return(
        <div className="flex flex-col gap-10">
            <h3>Generators &gt; Create</h3>
             <div className="flex gap-5">
                <div className="flex flex-col">
                    <label>Name</label>
                    <input className="border-1 border-black min-w-[400px] " type="text" 
                    ref={nameRef} onChange={() => handleChange()}></input>
                    <label>Description</label>
                    <textarea className="border-1 border-black min-w-[400px] min-h-[125px] max-h-[125px]" 
                    ref={descriptionRef} onChange={() => handleChange()}></textarea>
                </div>
                <div className="flex flex-col min-w-[200px]">
                    <label>Image</label>
                    <input className="" type="file"
                    ref={imageRef} onChange={() => handleChange()}></input>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="flex flex-col gap-1">
                    <label>Type</label>
                    <select className="border-1 border-black/30 p-1"
                    ref={typeRef} onChange={() => handleChange()}>
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
                    <select className="border-1 border-black/30 p-1"
                    ref={validationRef} onChange={() => handleChange()}>
                        <option>integer</option>
                        <option>float</option>
                    </select>
                </div>
            </div>
            <div className="flex gap-10 justify-end">
                <button onClick={closeHandler}>Cancel</button>
                <button>Preview</button>
                <button onClick={() => createGeneratorHandler(generator)}>Create</button>
            </div>
        </div>
    )
*/