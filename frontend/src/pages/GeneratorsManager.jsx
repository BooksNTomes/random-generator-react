/* eslint-disable no-unused-vars */
import NavCrumbs from '../components/NavCrumbs.jsx';
import '../css/index.css';
import {useState, useEffect, useRef} from 'react';
import { retrieveGenerators } from '../api/generators.api.js';
import { staticGenerators } from '../api/falsedb.api.js';

import GeneratorManagerCard from '../components/Cards/GeneratorManagerCard.jsx';
import GeneratorLoadingCard from '../components/Cards/GeneratorLoadingCard.jsx';
import GeneratorCreateCard from '../components/Cards/GeneratorCreateCard.jsx';
import CreateGeneratorPopup from '../components/Popups/CreateGeneratorPopup.jsx';
import DeleteGeneratorPopup from '../components/Popups/DeleteGeneratorPopup.jsx';
import UpdateGeneratorPopup from '../components/Popups/UpdateGeneratorPopup.jsx';

function GeneratorsManager(){
    const [generators, setGenerators] = useState([]);
    const [loadingGenerators, setLoadingGenerators] = useState(true);
    const [activeGenerator, setActiveGenerator] = useState(null);
    const createRef = useRef(null);
    const deleteRef = useRef(null);
    const updateRef = useRef(null);

    const createHandler = () => {
        createRef.current?.showModal();
    }

    const updateHandler = (id) => {
        console.log(`update ${id}`);
        setActiveGenerator(generators.filter((generator) => generator._id === id)[0]);
            updateRef.current?.showModal();
    }

    const deleteHandler = (id) => {
        console.log(`delete ${id}`);
        deleteRef.current?.showModal();
    }

    const closeHandler = (ref) => {
        ref.current?.close();
    }

    useEffect(() => {
        setGenerators(staticGenerators);
        setLoadingGenerators(false);
    },[generators])

    // TODO : ADD Create Card and Add Delete Button
    return(
        <div className='browser-size m-auto'>
            <NavCrumbs navtarget={''}></NavCrumbs>
            <div className='flex justify-evenly gap-4 flex-wrap h-full rounded-[10px] shadow-md border-1 border-black/10'>

                <dialog ref={createRef}>
                    <CreateGeneratorPopup closeHandler={() => closeHandler(createRef)}></CreateGeneratorPopup>
                </dialog>

                <dialog ref={deleteRef}>
                    <DeleteGeneratorPopup closeHandler={() => closeHandler(deleteRef)}></DeleteGeneratorPopup>
                </dialog>

                <dialog ref={updateRef}>
                    {(activeGenerator !== null) && 
                    <UpdateGeneratorPopup generator={activeGenerator}></UpdateGeneratorPopup>}
                </dialog>

                { loadingGenerators ? (Array.from(3).map((a, index) => (
                    <li key = {index}>
                        <GeneratorLoadingCard/>
                    </li>
                ))) : generators.map(generator => (
                    <li key= {generator._id}>
                        <GeneratorManagerCard
                        generator={generator}
                        updateHandler={() => updateHandler(generator._id)}
                        deleteHandler={() => deleteHandler(generator._id)}
                        />
                    </li>
                ))}

                <GeneratorCreateCard clickHandler={() => createHandler()}></GeneratorCreateCard>
                
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