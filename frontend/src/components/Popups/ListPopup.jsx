

export default function ListPopup({itemsList, itemToggle}){

    return (
        <>
            {itemsList.map((entry, index) => (
                <span key={index}>
                    <input type="checkbox" onChange={event => itemToggle(event, index)} name={entry} defaultChecked={listState[index] 
                    !== '' ? true : false}/>
                    <label htmlFor={entry}>{entry}</label>
                </span>))}
        </>
    )
}