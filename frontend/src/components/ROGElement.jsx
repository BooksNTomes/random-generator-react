// Random Object Generator Element
import { useState } from "react";

function ROGElement({rogelement}) {
    const [outElement, setOutElement] = useState();
    const [outElements, setOutElements] = useState();

    let displayMultBtn = rogelement.displayMultBtn;
    let objectList = rogelement.objectList;
    let algorithm = rogelement.algorithm;
    let outElementsTemp = [];

    function roll(){
        switch(algorithm){
            default:
                setOutElement(objectList[Math.floor(Math.random() * objectList.length)]);
                break;
        }
    }
    function rollMultiple(){
        let i = 0;
        while (i < 10){
            switch(algorithm){
                default:
                    outElementsTemp.push(objectList[Math.floor(Math.random() * objectList.length)])
                    break;
                }
            setOutElements(outElementsTemp);
            i++;
        }
    }

    if (displayMultBtn){
        return(
        <div className="rogelement-container">
            <p className="outElement">{outElements}</p>
            <button className="genMultBtn" onClick={rollMultiple}>Generate Multiple</button>
        </div>
    )
    }
    return(
        <div className="rogelement-container">
            <p className="outElement">{outElement}</p>
            <button className="genBtn" onClick={roll}>Generate</button>
        </div>
    )
}

export default ROGElement