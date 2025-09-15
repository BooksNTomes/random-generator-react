
export default function DeleteGeneratorPopup({closeHandler}){

    return(
        <>
            <h3>Delete Generator?</h3>
            <div>
                <button>Yes</button>
                <button onClick={closeHandler}>No</button>
            </div>
        </>
    )
}