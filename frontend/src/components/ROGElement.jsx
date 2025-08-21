// Random Object Generator Element
import { useState } from "react";

function ROGElement({rogelement}) {
    /*
        Random Object Generator Element
        A container div that contains:
            a generate / generate multiple button : button
            a list of objects to choose/generate : list
            a random number generation algorithm : from a random number generator library/s

            each item in the list can be given a percentage configuration:
            items = 1 (20%), 2(40%), 3(30%) which will set the item list to essentially have 20 1s, 40 2s, and 30 3s, setting their percentage chance to show up

            algorithm is configurable through a dropdown
            
            button changes from generate to generate multiple depending on the boolean value.

            TODO: Will need further design/decomposition based on design focus.
    */

    const [outElement, setOutElement] = useState();
    const [outElements, setOutElements] = useState();

    let displayMultBtn = rogelement.displayMultBtn;
    let objectList = rogelement.objectList;
    let algorithm = rogelement.algorithm;
    let outElementsTemp = [];

    // State Handlers
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

    // Return DOM
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