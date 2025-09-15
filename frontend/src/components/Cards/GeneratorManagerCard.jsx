import '../../css/index.css';
import Card from './Card';
import defaultImg from '../../assets/defaultImg.svg'

// Todos
// onclick -> open update generator modal
// onclick delete -> open delete generator modal
// Different Card altogether

export default function GeneratorManagerCard ({generator, updateHandler, deleteHandler}){
    return (
    <>
            <div className="
                            m-0 mt-10 mb-10 
                            text-center 
                            p-6 max-w-80 min-h-50 rounded-[5px] shadow-md border-1 border-black/15 hover:border-black
                            hover:shadow-lg hover:max-w-85 hover:min-h-50 transition-all duration-300 ease-in-out
                            ">
                <button onClick={updateHandler}>
                    <img src={generator.image !== null ? generator.image : defaultImg} className='rounded p-2 border-1 border-black/5 w-full'></img>
                    <h2>{generator.name}</h2>
                    <p>{generator.description}</p>
                </button>
                <button className='relative left-30 top-5' onClick={deleteHandler}>Delete</button>
            </div>
    </>
    )
}