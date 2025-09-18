
export default function UpdateGeneratorPopup({generator, closeHandler}){
    return(
        <div className="flex flex-col gap-5">
            <h3>Generators &gt; {generator.name}</h3>
            <div className="flex gap-5">

                <div className="flex flex-col">
                    <div className="flex flex-col mb-5">
                        <label>Name</label>
                        <input className="p-1 border-1 border-black min-w-[400px] " type="text" defaultValue={generator.name}></input>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label>Description</label>
                        <textarea className="p-1 border-1 border-black min-w-[400px] min-h-[125px] max-h-[125px]"  defaultValue={generator.description}></textarea>
                    </div>
                </div>

                <div className="flex flex-col min-w-[200px]">
                    <label>Image</label>
                    <input className="" type="file" defaultValue={generator.image}></input>
                </div>

            </div>

            <div className="flex gap-5">

                <div className="flex flex-col gap-1">
                    <label>Type</label>
                    <select className="border-1 border-black/30 p-1 rounded min-w-[125px] max-w-[125px] min-h-[30px] max-h-[30px]">
                        <option value="NUMBER">Number</option>
                        <option value="STRING">String</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label>List</label>
                    <button className="border-1 border-black/30 p-1 rounded min-w-[125px] max-w-[125px] min-h-[30px] max-h-[30px]"></button>
                </div>

                <div className="flex flex-col gap-1">
                    <label>Validation</label>
                    <select className="border-1 border-black/30 p-1 rounded min-w-[125px] max-w-[125px] min-h-[30px] max-h-[30px]">
                        <option value="INTEGER">Integer</option>
                        <option value="FLOAT">Float</option>
                    </select>
                </div>

            </div>

            <div className="flex gap-10 justify-end">
                <button className="p-2 border-2 border-black/50 rounded w-[125px] shadow" onClick={closeHandler}>Cancel</button>
                <button className="p-2 border-2 border-black/50 rounded w-[125px] shadow">Preview</button>
                <button className="p-2 border-2 border-black/50 rounded w-[125px] shadow">Update</button>
            </div>
        </div>
    )
}