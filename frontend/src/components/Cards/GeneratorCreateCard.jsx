
export default function GeneratorCreateCard({clickHandler}){

    return (
        <button onClick={clickHandler} className="
                        m-0 mt-10 mb-10 
                        text-center 
                        p-6 max-w-80 min-h-50 rounded-[5px] shadow-md border-1 border-black/15 hover:border-black
                        hover:shadow-lg hover:max-w-85 hover:min-h-50 transition-all duration-300 ease-in-out">
            <h2 className="pt-15">Create Generator</h2>
        </button>
    )
}