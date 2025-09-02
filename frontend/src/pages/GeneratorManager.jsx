/* eslint-disable no-unused-vars */
import {useState} from 'react';

export default function GeneratorManager({generator}){
    
    const [genName, setGenName] = useState(generator.name);
    const [genDesc, setGenDesc] = useState(generator.description);
    const [genImg, setGenImg] = useState(generator.img);
    const [genType, setGenType] = useState(generator.type);
    const [genList, setGenList] = useState(generator.list);
    const [genValidation, setGenValidation] = useState(generator.validation);

    return(
        <div>
            <div>
                <div>
                    <h4>Name</h4>
                    <input type="text"></input>
                    <h4>Description</h4>
                    <input type="text"></input>
                </div>
                <div>
                    <h4>Image</h4>
                    <input type="image"></input>
                </div>
            </div>
            <div>
                <div>
                    <h4>Type</h4>
                    <select></select>
                </div>
                <div>
                    <h4>List</h4>
                    <input type="text"></input>
                </div>
                <div>
                    <h4>Validation</h4>
                    <select></select>
                </div>
            </div>
            <div>
                <button>Cancel</button>
                <button>Preview</button>
                <button>Save</button>
            </div>
        </div>
    )
}