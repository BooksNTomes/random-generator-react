/* eslint-disable no-unused-vars */
import '../css/index.css';
import { useState, useEffect } from 'react';
import { NavCrumbs } from '../components/Layout.jsx';
import { GeneratorCard, GeneratorLoadingCard } from '../components/Cards.jsx';
import { staticGenerators } from '../api/falsedb.api.js';

function Generators(){
    const [generators, setGenerators] = useState([]);
    const [loadingGenerators, setLoadingGenerators] = useState(true);

    useEffect(() => {
        setGenerators(staticGenerators);
        setLoadingGenerators(false);
    },[generators])

    return(
        <div className='browser-size m-auto'>
            <NavCrumbs navTarget={''}></NavCrumbs>
            <div className='flex justify-evenly gap-4 flex-wrap h-full rounded-[10px] shadow-md border-1 border-black/10'>
                
                { loadingGenerators ? (Array.from(3).map((a, index) => (
                    <li key = {index}>
                        <GeneratorLoadingCard/>
                    </li>
                ))) : generators.map(generator => (
                    <li key= {generator._id}>
                        <GeneratorCard
                        generator={generator}/>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Generators;