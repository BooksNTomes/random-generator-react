/* eslint-disable no-unused-vars */
import '../css/index.css';
import { NavCrumbs } from '../components/Layout.jsx';
import { useState, useEffect, useRef } from 'react';
import { retrieveGenerators } from '../api/generators.api.js';
import { staticGenerators } from '../api/falsedb.api.js';

import {GeneratorManagerCard, GeneratorLoadingCard, GeneratorCreateCard} from '../components/Cards.jsx';

import CreateGeneratorPopup from '../components/Popups/CreateGeneratorPopup.jsx';
import DeleteGeneratorPopup from '../components/Popups/DeleteGeneratorPopup.jsx';
import UpdateGeneratorPopup from '../components/Popups/UpdateGeneratorPopup.jsx';

// TODO : Refactor Popup Implementation
function GeneratorsManager(){
    const [generators, setGenerators] = useState([]);
    const [loadingGenerators, setLoadingGenerators] = useState(true);
    const [activeGenerator, setActiveGenerator] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const updateRef = useRef(null);
    const createRef = useRef(null);
    const deleteRef = useRef(null);
    
    // Temporary (only for testing purposes)
    const [savedGenerators, setSavedGenerators] = useState([]);

    // Initialization
    useEffect(() => {
        setGenerators(staticGenerators);
        // setSavedGenerators(staticGenerators);
        setLoadingGenerators(false);
    },[])
    
    // Modals
    const createHandler = () => {
        setIsCreating(!isCreating);
        createRef.current?.showModal();
    }
    const updateHandler = (id) => {
        setActiveGenerator(generators.filter((generator) => generator._id === id)[0]);
        updateRef.current?.showModal();
    }
    const deleteHandler = (id) => {
        setActiveGenerator(generators.filter((generator) => generator._id === id)[0]);
        deleteRef.current?.showModal();
    }
    const closeHandler = (ref) => {
        setIsCreating(!isCreating);
        ref.current?.close();
    }
    const cancelHandler = (ref) => {
        setActiveGenerator(null);
        ref.current?.close();
    }

    // Show Preview
    const showPreview = (activeGenerator) => {
        
    }
    // Update Generator
    const updateGenerator = (id, newGenerator) => {
        const newGenerators = generators.slice().splice(id, 1, newGenerator);
        setGenerators(newGenerators)
        
    }
    // Delete Generator
    const deleteGenerator = (id) => {
        const newGenerators = generators.slice().splice(id, 1);
        setGenerators(newGenerators)

    }
    // Create Generator
    const createGenerator = (generator) => {
        console.log(generator);
        // const newGenerators = generators.slice().splice(generators.length-1, 0, generator);
        // setGenerators(newGenerators)
        closeHandler(createRef);
    }

    return(
        <div className='browser-size m-auto'>
            <NavCrumbs navtarget={''}></NavCrumbs>
            <div className='flex justify-evenly gap-4 flex-wrap h-full rounded-[10px] shadow-md border-1 border-black/10'>

            <dialog className="p-5 m-auto  border-2 border-black/50 rounded" ref={createRef}>
                {isCreating ? 
                    <CreateGeneratorPopup closeHandler={() => closeHandler(createRef)}
                        createGeneratorHandler={createGenerator}
                    ></CreateGeneratorPopup>
                    :
                    <></>
                }
            </dialog>

            <dialog className="p-5 m-auto  border-2 border-black/50 rounded" ref={deleteRef}>
                {(activeGenerator !== null && activeGenerator !== undefined) && 
                <DeleteGeneratorPopup closeHandler={() => cancelHandler(deleteRef)}>
                </DeleteGeneratorPopup>}
            </dialog>

            <dialog className="p-5 m-auto  border-2 border-black/50 rounded" ref={updateRef}>
                {(activeGenerator !== null && activeGenerator !== undefined) && 
                <UpdateGeneratorPopup 
                generator={activeGenerator}
                closeHandler={() => cancelHandler(updateRef)}
                ></UpdateGeneratorPopup>}
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