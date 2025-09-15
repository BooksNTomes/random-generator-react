/* eslint-disable no-unused-vars */
import NavCrumbs from '../components/NavCrumbs.jsx';
import '../css/index.css';
import {useState, useEffect} from 'react';
import { retrieveGenerators } from '../api/generators.api.js';
import { staticGenerators } from '../api/falsedb.api.js';
import GeneratorManagerCard from '../components/Cards/GeneratorManagerCard.jsx';
import GeneratorLoadingCard from '../components/Cards/GeneratorLoadingCard.jsx';
import GeneratorCard from '../components/Cards/GeneratorCard.jsx';

function GeneratorsManager(){
    const [generators, setGenerators] = useState([]);
    const [loadingGenerators, setLoadingGenerators] = useState(true);

    useEffect(() => {
        setGenerators(staticGenerators);
        setLoadingGenerators(false);
    },[generators])

    // TODO : ADD Create Card and Add Delete Button
    return(
        <div className='browser-size m-auto full-bottom'>
            <NavCrumbs navtarget={''}></NavCrumbs>
            <div className='flex justify-evenly gap-4 flex-wrap h-full rounded-[10px] shadow-md border-1 border-black/10'>
                { loadingGenerators ? (Array.from(3).map((a, index) => (
                    <li key = {index}>
                        <GeneratorLoadingCard/>
                    </li>
                ))) : generators.map(generator => (
                    <li key= {generator._id}>
                        <GeneratorManagerCard
                        generator={generator}/>
                    </li>
                ))}

                <div className="
                                m-0 mt-10 mb-10 
                                text-center 
                                p-6 max-w-80 min-h-50 rounded-[5px] shadow-md border-1 border-black/15 hover:border-black
                                hover:shadow-lg hover:max-w-85 hover:min-h-50 transition-all duration-300 ease-in-out
                                ">
                    <h2>Create Generator</h2>
                </div>
                
            </div>
        </div>
    )
}

export default GeneratorsManager;


    // useEffect(() => {
    //     const fetchGenerators = async () => {
    //         try {
    //             setLoadingGenerators(true);
    //             const response = await retrieveGenerators();

    //             if (response.ok){
    //                 const data = await response.json();
    //                 const generators = data.data;
    //                 if (generators.length > 0){
    //                     setGenerators(generators);
    //                     setLoadingGenerators(false);
    //                 } else {
    //                     setGenerators([]);
    //                 }
    //             }
    //         } catch (err) {
    //             console.log("Error in fetching generators");
    //         }
    //     }
    //     fetchGenerators();
    // }, []);