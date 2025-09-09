/* eslint-disable no-unused-vars */
import GeneratorCard from '../components/GeneratorCard';
import NavCrumbs from '../components/NavCrumbs';
import '../css/index.css';
import {useState, useEffect} from 'react';

import first from '../assets/first.svg';
import second from '../assets/second.svg';
import { retrieveGenerators } from '../api/generators.js';

function GeneratorsManager(){
    const [generators, setGenerators] = useState([]);
    const [loadingGenerators, setLoadingGenerators] = useState(true);

    useEffect(() => {
        const fetchGenerators = async () => {
            try {
                setLoadingGenerators(true);
                const response = await retrieveGenerators();

                if (response.ok){
                    const data = await response.json();
                    const generators = data.data;
                    if (generators.length > 0){
                        setGenerators(generators);
                        setLoadingGenerators(false);
                    } else {
                        setGenerators([]);
                    }
                }
            } catch (err) {
                console.log("Error in fetching generators");
            }
        }
        fetchGenerators();
    }, []);

    // TODO : ADD Create Card and Add Delete Button
    return(
        <div className='browser-size m-auto full-bottom'>
            <NavCrumbs navtarget={''}></NavCrumbs>
            <div className='flex justify-evenly gap-4 flex-wrap h-full rounded-[10px] shadow-md border-1 border-black/10'>
                { loadingGenerators ? (Array.from(3).map((a, index) => (
                    <GeneratorCard
                        link={''}
                        image={''}
                        name={''}
                        description={''}/>
                ))) : generators.map(generator => (
                    <GeneratorCard
                        link={`/generators-manager/${generator._id}`}
                        image={generator.img}
                        name={generator.name}
                        description={generator.description}/>
                        
                ))}
                
            </div>
        </div>
    )
}

export default GeneratorsManager;