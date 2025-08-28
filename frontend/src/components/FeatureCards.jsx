import '../css/index.css'
import Card from './Card'
import first from '../assets/first.svg';
import second from '../assets/second.svg';
import third from '../assets/third.svg';

function FeatureCards(){
    return (
    <div className="pl-8 pr-8 flex gap-4 items-center justify-evenly">
        <Card 
        image={first}
        name={"Lists of Objects"} 
        description={"Random number generators are mainly numbers, but numbers are ultimately a list of items to choose from."}/>
            
        <Card 
        image={second}
        name={"Algorithms"} 
        description={"Random number generators are powered by mathematical algorithms, mostly not truly random."}/>

        <Card
        image={third}
        name={"Probabilities"} 
        description={"Each item usually have equal odds of being chosen, but probabilities can make some items more likely than others."}/>
    </div>
    )
}

export default FeatureCards