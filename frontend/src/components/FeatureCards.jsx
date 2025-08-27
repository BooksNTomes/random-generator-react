import '../css/index.css'

function FeatureCards(){
    return (
    <div className="pl-8 pr-8 flex gap-4 items-center justify-around">
        <div className="w-100 border-2 
                        m-0 mt-10 mb-10 
                        text-center 
                        p-8 min-w-80 min-h-50    rounded-[5px] shadow-md
                        ">
            <img></img>
            <h2>Lists of Objects</h2>
            <p>Random number generators are mainly numbers, but numbers are ultimately a list of items to choose from</p>
        </div>
            
        <div className="w-100 border-2 
                        m-0 mt-10 mb-10 
                        text-center 
                        p-8 min-w-80 min-h-50    rounded-[5px] shadow-md
                        ">
            <img></img>
            <h2>Algorithms</h2>
            <p>Random number generators are powered by mathematical algorithms, mostly not truly random.</p>
        </div>

        <div className="w-100 border-2 
                        m-0 mt-10 mb-10 
                        text-center 
                        p-8 min-w-80 min-h-50    rounded-[5px] shadow-md
                        ">
            <img></img>
            <h2>Probabilities</h2>
            <p>Each item usually have equal odds of being chosen, but probabilities can make some items more likely than others.</p>
        </div>
    </div>
    )
}

export default FeatureCards