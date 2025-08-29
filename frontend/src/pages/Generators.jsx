import GeneratorCard from '../components/GeneratorCard';
import NavCrumbs from '../components/NavCrumbs';
import '../css/index.css'

import first from '../assets/first.svg';
import second from '../assets/second.svg';
import third from '../assets/third.svg';

function Generators(){
    return(
        <div>
            <NavCrumbs navtarget={''}></NavCrumbs>

            <div className='flex justify-evenly gap-4 flex-wrap browser-size m-auto h-full rounded-[10px] shadow-md border-1 border-black/10'>
                <GeneratorCard
                link={''}
                image={first}
                name={"Lists of Objects"} 
                description={"Random number generators are mainly numbers, but numbers are ultimately a list of items to choose from."}/>
                    
                <GeneratorCard 
                link={''}
                image={second}
                name={"Algorithms"} 
                description={"Random number generators are powered by mathematical algorithms, mostly not truly random."}/>

                <GeneratorCard
                link={''}
                image={third}
                name={"Probabilities"} 
                description={"Each item usually have equal odds of being chosen, but probabilities can make some items more likely than others."}/>

                <GeneratorCard
                link={''}
                image={first}
                name={"Lists of Objects"} 
                description={"Random number generators are mainly numbers, but numbers are ultimately a list of items to choose from."}/>
                    
                <GeneratorCard 
                link={''}
                image={second}
                name={"Algorithms"} 
                description={"Random number generators are powered by mathematical algorithms, mostly not truly random."}/>

                <GeneratorCard
                link={''}
                image={third}
                name={"Probabilities"} 
                description={"Each item usually have equal odds of being chosen, but probabilities can make some items more likely than others."}/>

                <GeneratorCard
                link={''}
                image={first}
                name={"Lists of Objects"} 
                description={"Random number generators are mainly numbers, but numbers are ultimately a list of items to choose from."}/>
                    
                <GeneratorCard 
                link={''}
                image={second}
                name={"Algorithms"} 
                description={"Random number generators are powered by mathematical algorithms, mostly not truly random."}/>

                <GeneratorCard
                link={''}
                image={third}
                name={"Probabilities"} 
                description={"Each item usually have equal odds of being chosen, but probabilities can make some items more likely than others."}/>
            </div>
        </div>
    )
}

export default Generators;