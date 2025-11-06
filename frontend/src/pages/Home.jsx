import logo from '../assets/frame.svg';
import first from '../assets/first.svg';
import second from '../assets/second.svg';
import third from '../assets/third.svg';
import { ImageCard } from '../components/Cards.jsx';

function Home() {
    return (
        <div className=''>
            <div className='pt-10 pb-10 border-black/10 border-b-1'>
                <div className="browser-size m-auto flex justify-between items-center ">
                    <img className="ml-auto size-70" src={logo} alt="hero-img"></img>
                    <div className='ml-40 w-1/2 p-2 flex flex-col gap-2'>
                        <h2 className='w-7/8 mb-3'>Not Just Random Number Generators</h2>
                        <p className='ptag-lg w-7/8 mb-3'>This is a showcase website with prebuilt random number generators, 
                        but some generate objects, some generate images, and they are configurable.</p>
                        <div className='p-1.5 box-shadow-gray w-7/8'>
                            <p className='ptag-lg'>Feel free to further explore these random number generators through the 
                            <span className='embolden ptag-lg'> Github repository!</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="browser-size m-auto flex gap-4 items-center justify-evenly">
                <ImageCard 
                image={first}
                name={"Lists of Objects"} 
                description={"Random number generators are mainly numbers, but numbers are ultimately a list of items to choose from."}/>
                    
                <ImageCard 
                image={second}
                name={"Algorithms"} 
                description={"Random number generators are powered by mathematical algorithms, mostly not truly random."}/>

                <ImageCard
                image={third}
                name={"Probabilities"} 
                description={"Each item usually have equal odds of being chosen, but probabilities can make some items more likely than others."}/>
            </div>
        </div>
    )
}

export default Home;