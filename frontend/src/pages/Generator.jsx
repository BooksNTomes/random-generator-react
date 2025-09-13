import NavCrumbs from '../components/NavCrumbs'
import '../css/index.css'
import {useState, useEffect} from 'react';

// import { retrieveGenerator } from '../api/retrieveGenerator';
import { useParams } from 'react-router-dom';
import NumbersGenerator from './GeneratorTypes/NumbersGenerator';
import StringsGenerator from './GeneratorTypes/StringsGenerator';
import { staticGenerators } from '../api/falsedb.api';


function Generator()  {
    const {id} = useParams();
    const [generator, setGenerator] = useState({});
    const [loadingGenerator, setLoadingGenerator] = useState(true);
    
    useEffect(() => {
        const usedGenerator = (staticGenerators.filter((generator) => generator._id === Number(id)))[0];
        setGenerator(usedGenerator);
        setLoadingGenerator(false);
    },[])

    return(
        <div className='pb-20 full-bottom browser-size m-auto'>
            <NavCrumbs navtarget={''}></NavCrumbs>

            {generator.type === 'NUMBER' && 
            <NumbersGenerator generator={generator}></NumbersGenerator>}

            {generator.type === 'STRING' &&
            <StringsGenerator generator={generator}></StringsGenerator>}
            
        </div>
    )
}

export default Generator;

    // useEffect(() => {
    //     // Retrieve generator and set type
    //     const fetchGenerator = async () => {
    //         try {
    //             const response = await retrieveGenerator(id);

    //             if (response.ok){
    //                 const data = await response.json();
    //                 const generator = data.data;
    //                 if (generator !== null && generator !== undefined){
    //                     setGenerator(generator);
    //                 } else {
    //                     setGenerator(null);
    //                 }
    //             }
    //         } catch (err) {
    //             console.log("Error in fetching generator");
    //         }
    //     }
    //     fetchGenerator();
    // }, [generator.type])