import '../css/index.css';
import logo from '../assets/frame.svg';

function Hero() {
    return (
    <div className='p-5 border-b-4'>
        <div className="flex m-auto justify-around items-center browser-size">
            <img className="size-60" src={logo} alt="hero-img"></img>
            <div className='w-1/2 p-2'>
                <h2>Not Just Random Number Generators</h2>
                <p>This is a showcase website with prebuilt random number generators, 
                but some generate objects, some generate images, and they are configurable.</p>
                <div className='p-1.5 box-shadow'>
                    <p>Feel free to further explore these random number generators through the 
                    <span className='embolden'> Github repository!</span></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero;