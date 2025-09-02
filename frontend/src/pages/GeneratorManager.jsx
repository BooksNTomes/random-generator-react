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

        </div>
    )
}