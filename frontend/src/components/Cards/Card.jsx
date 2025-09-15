import '../../css/index.css';
import defaultImg from '../../assets/defaultImg.svg'

export default function Card({image, name, description}){
    return (
    <>
        <div className="
                        m-0 mt-10 mb-10 
                        text-center 
                        p-6 max-w-80 min-h-50 rounded-[5px] shadow-md border-1 border-black/15 hover:border-black
                        hover:shadow-lg hover:max-w-85 hover:min-h-50 transition-all duration-300 ease-in-out
                        ">
            <img src={image !== null ? image : defaultImg} className='rounded p-2 border-1 border-black/5 w-full'></img>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </>
    )
}