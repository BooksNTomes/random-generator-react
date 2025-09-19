import {useState, useRef, useEffect} from 'react';
import { types, validations } from '../constants/generator.constants';
import { InputContainer, ListContainer, SelectContainer } from './FormComponents';

// Generators
export function CreateForm({closeHandler, previewHandler, createGeneratorHandler}) {
    const [generator, setGenerator] = useState({});
    const [listState, setListState] = useState([]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setGenerator({
            ...generator,
            [name]: value,
        });
    };

    const listHandler = () => {}

    return(
        <div className="flex flex-col gap-10">
            <h3>Generators &gt; Create</h3>
            <div className="flex gap-5">
                <div className="flex flex-col">
                    <InputContainer label="Name">
                        <input name="name" type="text"  className="border-1 border-black min-w-[400px] " 
                        onChange={(event) => handleChange(event)}></input>
                    </InputContainer>

                    <InputContainer label="Description">
                        <textarea name="description" className="border-1 border-black min-w-[400px] min-h-[125px] max-h-[125px]" 
                        onChange={(event) => handleChange(event)}></textarea>
                    </InputContainer>
                </div>
                <InputContainer label="Image">
                    <input name="image" type="file" className=""
                    onChange={(event) => handleChange(event)}></input>
                </InputContainer>
            </div>

            <div className="flex gap-5">
                <SelectContainer label="Type" options={types} 
                onChange={(event) => handleChange(event)}></SelectContainer>
                <ListContainer handler={() => listHandler()}></ListContainer>
                <SelectContainer label="Validation" options={validations}
                onChange={(event) => handleChange(event)}
                ></SelectContainer>
            </div>

            <div className="flex gap-10 justify-end">
                <button onClick={() => closeHandler()}>Cancel</button>
                <button oClick={() => previewHandler()}>Preview</button>
                <button onClick={() => createGeneratorHandler(generator)}>Create</button>
            </div>
        </div>
    )
}

export function UpdateForm({generator, closeHandler, previewHandler, updateHandler}) {
    const [newGenerator, setNewGenerator] = useState({...generator});
    const [listState, setListState] = useState(generator.list.slice());

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewGenerator({
            ...newGenerator,
            [name]: value,
        });
    };

    const listHandler = () => {}

    return(
        <div className="flex flex-col gap-10">

            <h3>Generators &gt; {generator.name}</h3>

            <div className="flex gap-5">
                <div className="flex flex-col">
                    <InputContainer label="Name">
                        <input name="name" type="text"  className="border-1 border-black min-w-[400px] " 
                        onChange={(event) => handleChange(event)}
                        defaultValue={generator.name}
                        ></input>
                    </InputContainer>

                    <InputContainer label="Description">
                        <textarea name="description" className="border-1 border-black min-w-[400px] min-h-[125px] max-h-[125px]" 
                        onChange={(event) => handleChange(event)}
                        defaultValue={generator.description}
                        ></textarea>
                    </InputContainer>
                </div>
                <InputContainer label="Image">
                    <input name="image" type="file" className=""
                    onChange={(event) => handleChange(event)}
                    defaultValue={generator.image}
                    ></input>
                </InputContainer>
            </div>

            <div className="flex gap-5">
                <SelectContainer label="Type" options={types} 
                onChange={(event) => handleChange(event)}
                defaultValue={generator.type}
                ></SelectContainer>

                <ListContainer handler={() => listHandler()}></ListContainer>

                <SelectContainer label="Validation" options={validations}
                onChange={(event) => handleChange(event)}
                defaultValue={generator.validation}
                ></SelectContainer>
            </div>

            <div className="flex gap-10 justify-end">
                <button onClick={() => closeHandler()}>Cancel</button>
                <button onClick={() => previewHandler()}>Preview</button>
                <button onClick={() => updateHandler()}>Update</button>
            </div>

        </div>
    )
}

export function DeleteForm({closeHandler, deleteHandler}) {
    return(
        <div className="w-[400px] h-[100px]">
            <h3>Delete Generator?</h3>
            <div className="flex gap-10 justify-end">
                <button onClick={() => deleteHandler()}>Yes</button>
                <button onClick={() => closeHandler()}>No</button>
            </div>
        </div>
    )
}

// Generator Types
export function ListForm({initialList, itemsList, itemToggle}){

    return (
        <>
            {initialList.map((entry, index) => (
            <span key={index}>
                <input type="checkbox" 
                onChange={ (event) => itemToggle(event, index) } 
                name={entry} 
                defaultChecked={itemsList[index] !== '' ? true : false}/>
                <label htmlFor={entry}>{entry}</label>
            </span>))}
        </>
    )
}

export function ListCreate(){

}

// Auth Prototypes
export function loginForm({handler}) {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const loginHandler = () =>{

    }

    return(
        <AuthForm handler={loginHandler}></AuthForm>
    )
}

export function RegisterForm() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const registerHandler = () =>{

    }

    return(
        <AuthForm handler={registerHandler}></AuthForm>
    )
}

export function AuthForm({handler}) {
    return(
        <>
            <form className="flex flex-col p-5 border-2 border-black/50 align-middle justify-center">
                <InputContainer label="Username">
                    <input name="name" type="text"></input>
                </InputContainer>
                <InputContainer label="Password">
                    <input name="password" type="text"></input>
                </InputContainer>
                <button type="submit" onClick={() => handler()}>Login</button>
            </form>
        </>
    )
}