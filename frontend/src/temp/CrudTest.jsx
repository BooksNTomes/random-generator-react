/* eslint-disable no-unused-vars */
import '../css/index.css';
import { NavCrumbs } from '../components/Layout.jsx';
import { useState, useEffect } from 'react';
import { GeneratorManagerCard, GeneratorLoadingCard, GeneratorCreateCard } from '../components/Cards.jsx';
import { retrieveGenerators } from '../api/generators.api.js';
import { staticGenerators } from '../api/falsedb.api.js';
import { DeleteGeneratorPopup } from '../components/Popups.jsx';

// TODO : Refactor Popup Implementation
function CrudTest(){
    const [generators, setGenerators] = useState([]);
    const [loadingGenerators, setLoadingGenerators] = useState(true);
    const [activeGenerator, setActiveGenerator] = useState(null);

    const [isCreating, setIsCreating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isPreviewing, setIsPreviewing] = useState(false);

    // Initialization
    useEffect(() => {
        setGenerators(staticGenerators);
        setLoadingGenerators(false);
    },[])
    
    // Modals
    const createHandler = () => {
        setIsCreating(!isCreating); // false -> true
    }
    const previewHandler = (generator) => {
        isPreviewing(!isPreviewing); // false -> true
    }
    const updateHandler = (id, index) => {
        setIsUpdating(!isUpdating); // false -> true
        setActiveGenerator(generators.filter((generator) => generator._id === id)[0]);
        activeGenerator.index = index;
    }
    const deleteHandler = (id, index) => {
        setIsDeleting(!isDeleting); // false -> true
        setActiveGenerator(generators.filter((generator) => generator._id === id)[0]);
        activeGenerator.index = index;
    }
    
    // Update Generator
    const updateGenerator = (newGenerator) => {
        const newGenerators = generators.slice();
        newGenerators.splice(activeGenerator.index, 1, newGenerator);
        setGenerators(newGenerators);
        setIsUpdating(!isUpdating); // true -> false
    }
    // Delete Generator
    const deleteGenerator = () => {
        const newGenerators = generators.slice();
        newGenerators.splice (activeGenerator.index, 1);
        setGenerators(newGenerators);
        setIsDeleting(!isDeleting); // true -> false
    }
    // Create Generator
    const createGenerator = (generator) => {
        console.log(generator);
        const newGenerators = [...generators, generator]
        setGenerators(newGenerators)
        setIsCreating(!isCreating); // true -> false
    }

    const crudCloseHandler = () => {
        setActiveGenerator(null);
        setIsCreating(false);
        setIsDeleting(false);
        setIsUpdating(false);
    }

    return(
        <div className='browser-size m-auto'>
            <NavCrumbs navTarget={''}></NavCrumbs>
            <div className='flex justify-evenly gap-4 flex-wrap h-full rounded-[10px] shadow-md border-1 border-black/10'>

                <DeleteGeneratorPopup
                active={isDeleting}
                deleteHandler={() => deleteGenerator()}
                closeHandler={() => crudCloseHandler()}>
                </DeleteGeneratorPopup>

                {}

                {}

                { loadingGenerators ? (Array.from(3).map((a, index) => (
                    <li key = {index}>
                        <GeneratorLoadingCard/>
                    </li>
                ))) : generators.map((generator, index) => (
                    <li key= {generator._id}>
                        <GeneratorManagerCard
                        generator={generator}
                        updateHandler={() => updateHandler(generator._id, index)}
                        deleteHandler={() => deleteHandler(generator._id, index)}
                        />
                    </li>
                ))}

                <GeneratorCreateCard clickHandler={() => createHandler()}></GeneratorCreateCard>
                
            </div>
        </div>
    )
}

export default CrudTest;


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