import '../css/index.css';

function Card({image, name, description}){
    return (
    <>
        <div className="w-100 
                        m-0 mt-10 mb-10 
                        text-center 
                        p-6 min-w-80 max-w-80 min-h-50 rounded-[5px] shadow-md border-1 border-black/15 hover:border-black
                        hover:shadow-lg
                        ">
            <img src={image} className='rounded p-2 border-1 border-black/5 w-full'></img>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </>
    )
}

export default Card