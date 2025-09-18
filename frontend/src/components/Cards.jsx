import '../../css/index.css';
import { Link } from 'react-router-dom';
import defaultImg from '../../assets/defaultImg.svg'

export default function Card({children}){
    return(
        <>
            <div className="
                        m-0 mt-10 mb-10 
                        text-center 
                        p-6 max-w-80 min-h-50 rounded-[5px] shadow-md border-1 border-black/15 hover:border-black
                        hover:shadow-lg hover:max-w-85 hover:min-h-50 transition-all duration-300 ease-in-out
                        ">
                {children}
            </div>
        </>
    )
}

export function GeneratorManagerCard ({generator, updateHandler, deleteHandler}){
    return (
    <>
        <Card>
            <button onClick={updateHandler}>
                <img src={generator.image !== null ? generator.image : defaultImg} className='rounded p-2 border-1 border-black/5 w-full'></img>
                <h2>{generator.name}</h2>
                <p>{generator.description}</p>
            </button>
            <button className='relative left-30 top-5' onClick={deleteHandler}>Delete</button>
        </Card>
    </>
    )
}

export function GeneratorCreateCard({clickHandler}){

    return (
        <>
            <Card>
                <button onClick={clickHandler}>
                    <h2 className="pt-15">Create Generator</h2>
                </button>
            </Card>
        </>
    )
}

export function ImageCard({image, name, description}){
    return (
        <>
            <Card>
                <img src={image !== null ? image : defaultImg} className='rounded p-2 border-1 border-black/5 w-full'></img>
                <h2>{name !== null ? name : ""}</h2>
                <p>{description !== null ? description : ""}</p>
            </Card>
        </>
    )
}

export function GeneratorCard ({generator}){
    return (
        <>
             <Link to={`/generators/${generator._id}`}>
                <ImageCard 
                    image={generator.image}
                    name={generator.name}
                    description={generator.description}>
                </ImageCard>
            </Link>
        </>
    )
}

export function GeneratorLoadingCard (){
    return (
        <>
            <ImageCard image={null} name={null} description={null}></ImageCard>
        </>
    )
}
