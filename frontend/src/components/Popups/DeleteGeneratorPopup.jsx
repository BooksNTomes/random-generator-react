
export default function DeleteGeneratorPopup({closeHandler}){

    return(
        <div className="w-[400px] h-[100px]">
            <h3>Delete Generator?</h3>
            <div className="flex gap-10 justify-end">
                <button>Yes</button>
                <button onClick={closeHandler}>No</button>
            </div>
        </div>
    )
}