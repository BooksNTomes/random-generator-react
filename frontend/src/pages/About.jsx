import '../css/index.css';
import logo from '../assets/frame.svg';

export default function About() {
    return (
        <div className='pt-10 pb-10 h-full browser-size m-auto full-bottom'>
            <div className="flex">
                <div className='w-3/4 p-2 flex flex-col gap-2'>
                    <h2 className='mb-5'>Why Random Number Generators?</h2>
                    <p className='text-sm/10 ptag-xl'>That's because I like random number generators. To an extent, many things rely on them, 
                    from security, to creatives, and to even videogames. And for the latter, 
                    RNG makes things fun and frustrating sometimes (consequently entertaining).</p>
                </div>
                <img className="ml-auto size-70" src={logo} alt="hero-img"></img>
            </div>
            <div className='p-2 border-1 border-black/5 box-shadow-default mt-10 mb-10'>
                <p className='mb-3 p-2 ptag-xl'>I also built this site to study React basics and to further my Web Development knowledge.</p>
                <p className='mb-3 p-2 ptag-xl'>I aspire to make the code readable so that users can make their own random number generator websites or objects with ease.</p>
            </div>
        </div>
    )
}