import '../css/index.css';
import logo from '../assets/frame.svg';

function Hero() {
    return (
    <div className='p-5 border-b-4'>
        <div className="flex m-auto justify-between items-center browser-size">
            <img className="ml-auto mr-5 size-60" src={logo} alt="hero-img"></img>
            <div className='ml-40 w-1/2 p-2 flex flex-col gap-2'>
                <h2 className='w-7/8'>Not Just Random Number Generators</h2>
                <p className='w-7/8'>This is a showcase website with prebuilt random number generators, 
                but some generate objects, some generate images, and they are configurable.</p>
                <div className='p-1.5 box-shadow w-7/8'>
                    <p>Feel free to further explore these random number generators through the 
                    <span className='embolden'> Github repository!</span></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero;