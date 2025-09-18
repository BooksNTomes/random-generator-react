import NumbersGenerator from "../../pages/GeneratorTypes/NumbersGenerator";
import StringsGenerator from "../../pages/GeneratorTypes/StringsGenerator";
import {NavCrumbs} from "../Layout.jsx";


export default function PreviewGeneratorPopup({generator}){
    return(
        <div className='pb-20 browser-size m-auto'>
            <NavCrumbs navTarget={generator.name}></NavCrumbs>
            <h1>{generator.name}</h1>
            <p className='ptag-xl mb-5'>{generator.description}</p>

            {generator.type === 'NUMBER' && 
            <NumbersGenerator generator={generator}></NumbersGenerator>}

            {generator.type === 'STRING' &&
            <StringsGenerator generator={generator}></StringsGenerator>}
        </div>
    )
}