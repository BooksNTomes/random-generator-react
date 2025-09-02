import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from '../assets/frame.svg'

function About() {
    return (
        <div className='pt-10 pb-10 h-full'>
            <div className="flex m-auto browser-size">
                <div className='w-3/4 p-2 flex flex-col gap-2'>
                    <h2>Why Random Number Generators?</h2>
                    <p>That's because I like random number generators. To an extent, many things rely on them, 
                    from security, to creatives, and to even videogames. And for the latter, 
                    RNG makes things fun and frustrating sometimes (consequently entertaining).</p>
                </div>
                <img className="ml-auto mr-5 size-60 shadow" src={logo} alt="hero-img"></img>
            </div>
            <div className='p-2 border-black/10 rounded-[5px] shadow-md browser-size m-auto mt-10 mb-10'>
                <p className='mb-3'>I also built this site to study React basics and to further my Web Development knowledge.</p>
                <p className='mb-3'>I aspire to make the code readable so that users can make their own random number generator websites or objects with ease.</p>
            </div>
        </div>
    )
}

export default About;