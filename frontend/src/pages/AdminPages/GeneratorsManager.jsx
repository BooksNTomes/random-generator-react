/* eslint-disable no-unused-vars */
import '../css/index.css';
import { NavCrumbs } from '../../components/Layout.jsx';
import { useState, useEffect } from 'react';
import { GeneratorManagerCard, GeneratorLoadingCard, GeneratorCreateCard } from '../../components/Cards.jsx';
import { CreateGeneratorPopup, DeleteGeneratorPopup, UpdateGeneratorPopup } from '../../components/Popups.jsx';
import { staticGenerators } from '../../api/falsedb.api.js';

// TODO : Refactor Popup Implementation
function GeneratorsManager(){
    const [generators, setGenerators] = useState([]);
    const [loadingGenerators, setLoadingGenerators] = useState(true);
    const [activeGenerator, setActiveGenerator] = useState(null);

    const [isCreating, setIsCreating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    // Initialization
    useEffect(() => {
        setGenerators(staticGenerators);
        setLoadingGenerators(false);
    },[])
    
    // Modals
    const createHandler = () => {
        setIsCreating(!isCreating); // false -> true
    }
    const updateHandler = (id, index) => {
        setIsUpdating(!isUpdating); // false -> true
        const filteredGenerator = generators.filter((generator) => generator._id === id)[0];
        const selectedGenerator = {...filteredGenerator, index: index};
        setActiveGenerator(selectedGenerator);
    }
    const deleteHandler = (id, index) => {
        setIsDeleting(!isDeleting); // false -> true
        const filteredGenerator = generators.filter((generator) => generator._id === id)[0];
        const selectedGenerator = {...filteredGenerator, index: index};
        setActiveGenerator(selectedGenerator);
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
            <div className='flex justify-evenly gap-4 flex-wrap h-full rounded-[10px] shadow-md border-1 border-black/10 mb-10'>

                <DeleteGeneratorPopup
                active={isDeleting}
                deleteHandler={() => deleteGenerator()}
                closeHandler={() => crudCloseHandler()}>
                </DeleteGeneratorPopup>

                <CreateGeneratorPopup
                index={generators.length}
                active={isCreating}
                createGeneratorHandler={createGenerator}
                closeHandler={crudCloseHandler}
                ></CreateGeneratorPopup>

                <UpdateGeneratorPopup
                active={isUpdating}
                generator={activeGenerator}
                updateHandler={updateGenerator}
                closeHandler={crudCloseHandler}
                ></UpdateGeneratorPopup>

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

                <GeneratorCreateCard key="CREATE" clickHandler={() => createHandler()}></GeneratorCreateCard>
                
            </div>
        </div>
    )
}

export default GeneratorsManager;