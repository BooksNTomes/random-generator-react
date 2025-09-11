import NavCrumbs from '../components/NavCrumbs'
import '../css/index.css'
// import {useState, useEffect} from 'react';

// import { retrieveGenerator } from '../api/retrieveGenerator';
import { useParams } from 'react-router-dom';
import NumbersGenerator from './GeneratorTypes/NumbersGenerator';
import StringsGenerator from './GeneratorTypes/StringsGenerator';


function Generator()  {
    const {id} = useParams();
    const [generator, setGenerator] = useState({});

    useEffect(() => {
        // Retrieve generator and set type
        const fetchGenerator = async () => {
            try {
                const response = await retrieveGenerator(id);

                if (response.ok){
                    const data = await response.json();
                    const generator = data.data;
                    if (generator !== null && generator !== undefined){
                        setGenerator(generator);
                    } else {
                        setGenerator(null);
                    }
                }
            } catch (err) {
                console.log("Error in fetching generator");
            }
        }
    }, [generator.type])

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