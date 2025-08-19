// Random Object Generator Element
import "../css/ROGElement.jsx"

function ROGElement({rogelement}) {
    let displayMultBtn = rogelement.displayMultBtn;
    let objectList = rogelement.objectList;
    let algorithm = rogelement.algorithm
    let outElement = null;
    let outElements = [];

    function roll(){
        switch(algorithm){
            default:
                outElement = objectList[Math.floor(Math.random() * objectList.length) + 1];
                break;
        }
    }
    function rollMultiple(){
        let i = 0;
        while (i < 10){
            switch(algorithm){
                default:
                    outElements.append(objectList[Math.floor(Math.random() * objectList.length) + 1]);
                    break;
            }
        }
    }

    if (displayMultBtn){
        return(
        <div classname="rogelement-container">
            <p classname="outElement">{outElement}</p>
            <button classname="genBtn" onclick={roll}>Generate</button>
            <button classname="genMultBtn" onclick={roll}>Generate Multiple</button>
        </div>
    )
    }
    return(
        <div classname="rogelement-container">
            <p classname="outElement">{outElement}</p>
            <button classname="genBtn" onclick={rollMultiple}>Generate</button>
        </div>
    )
}

export default ROGElement