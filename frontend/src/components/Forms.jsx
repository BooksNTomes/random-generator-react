import {useState, useRef, useEffect} from 'react';

// Generators
export function CreateForm() {
    const [generator, setGenerator] = useState({});
    const [listState, setListState] = useState([]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setGenerator({
            ...generator,
            [name]: value,
        });
    };

    return(
        <div className="flex flex-col gap-10">

            <h3>Generators &gt; Create</h3>

            <div className="flex gap-5">
                <div className="flex flex-col">

                    <label>Name</label>
                    <input className="border-1 border-black min-w-[400px] " type="text" 
                    onChange={(event) => handleChange(event)}></input>

                    <label>Description</label>
                    <textarea className="border-1 border-black min-w-[400px] min-h-[125px] max-h-[125px]" 
                    onChange={(event) => handleChange(event)}></textarea>

                </div>
                <div className="flex flex-col min-w-[200px]">

                    <label>Image</label>
                    <input className="" type="file"
                    onChange={(event) => handleChange(event)}></input>

                </div>
            </div>

            <div className="flex gap-5">
                <div className="flex flex-col gap-1">

                    <label>Type</label>
                    <select className="border-1 border-black/30 p-1"
                    onChange={(event) => handleChange(event)}>
                        <option>NUMBER</option>
                        <option>STRING</option>
                    </select>

                </div>

                <div className="flex flex-col gap-1">
                    <label>List</label>
                    <button className="border-1 border-black/30 p-1">Open List</button>
                </div>

                <div className="flex flex-col gap-1">
                    <label>Validation</label>
                    <select className="border-1 border-black/30 p-1"
                    onChange={(event) => handleChange(event)}>
                        <option>INTEGER</option>
                        <option>FLOAT</option>
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
}

export function UpdateForm({generator}) {
    const [newGenerator, setNewGenerator] = useState({});
    const [listState, setListState] = useState([]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewGenerator({
            ...generator,
            [name]: value,
        });
    };

    return(
        <div className="flex flex-col gap-10">

            <h3>Generators &gt; {generator.name}</h3>

            <div className="flex gap-5">
                <div className="flex flex-col">

                    <label>Name</label>
                    <input className="border-1 border-black min-w-[400px] " 
                    type="text" defaultValue={generator.name}></input>

                    <label>Description</label>
                    <textarea className="border-1 border-black min-w-[400px] min-h-[125px] max-h-[125px]"  
                    defaultValue={generator.description}></textarea>

                </div>
                <div className="flex flex-col min-w-[200px]">

                    <label>Image</label>
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

export function DeleteForm({closeHandler, deleteHandler}) {
    return(
        <div className="w-[400px] h-[100px]">
            <h3>Delete Generator?</h3>
            <div className="flex gap-10 justify-end">
                <button>Yes</button>
                <button onClick={closeHandler}>No</button>
            </div>
        </div>
    )
}

// TODO: Auth
export function LoginForm() {

}

export function RegisterForm() {

}
