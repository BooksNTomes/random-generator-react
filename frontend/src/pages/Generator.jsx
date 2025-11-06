import '../css/index.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavCrumbs } from '../components/Layout.jsx'
import NumbersGenerator from './GeneratorTypes/NumbersGenerator';
import StringsGenerator from './GeneratorTypes/StringsGenerator';
import { staticGenerators } from '../api/falsedb.api';

function Generator()  {
    const {id} = useParams();
    const [generator, setGenerator] = useState({});
    
    useEffect(() => {
        const usedGenerator = (staticGenerators.filter((generator) => generator._id === Number(id)))[0];
        setGenerator(usedGenerator);
    },[])

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

export default Generator;