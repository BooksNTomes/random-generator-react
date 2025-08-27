import '../css/index.css'
import Card from './Card'

function FeatureCards(){
    return (
    <div className="pl-8 pr-8 flex gap-4 items-center justify-evenly">
        <Card 
        name={"Lists of Objects"} 
        description={"Random number generators are mainly numbers, but numbers are ultimately a list of items to choose from"}/>
            
        <Card 
        name={"Algorithms"} 
        description={"Random number generators are powered by mathematical algorithms, mostly not truly random."}/>

        <Card 
        name={"Probabilities"} 
        description={"Each item usually have equal odds of being chosen, but probabilities can make some items more likely than others."}/>
    </div>
    )
}

export default FeatureCards