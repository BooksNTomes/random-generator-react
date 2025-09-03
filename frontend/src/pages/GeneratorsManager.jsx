import GeneratorCard from '../components/GeneratorCard';
import NavCrumbs from '../components/NavCrumbs';
import '../css/index.css'

import first from '../assets/first.svg';
import second from '../assets/second.svg';

export default function GeneratorsManager(){
    return(
        <div className='browser-size m-auto full-bottom'>
            <NavCrumbs navtarget={''}></NavCrumbs>

            <div className='flex justify-evenly gap-4 flex-wrap h-full rounded-[10px] shadow-md border-1 border-black/10'>
                <GeneratorCard
                link={''}
                image={first}
                name={"Numbers"} 
                description={"Random number generators are mainly numbers, but numbers are ultimately a list of items to choose from."}/>
                    
                <GeneratorCard 
                link={''}
                image={second}
                name={"Names"} 
                description={"Random number generators are powered by mathematical algorithms, mostly not truly random."}/>

                <GeneratorCard
                link={'/add'}
                image={''}
                name={"Add Generator"}
                description={""}>
                </GeneratorCard>
            </div>
        </div>
    )
}