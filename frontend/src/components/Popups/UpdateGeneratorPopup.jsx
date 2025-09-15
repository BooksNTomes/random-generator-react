
export default function UpdateGeneratorPopup({generator}){
    return(
        <div>
            <NavCrumbs></NavCrumbs>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" defaultValue={generator.name}></input>
                    <label>Description</label>
                    <input type="text" defaultValue={generator.description}></input>
                </div>
                <div>
                    <label>Image</label>
                    <input type="image" defaultValue={generator.image}></input>
                </div>
            </div>
            <div>
                <label>Type</label>
                <select>
                    <option>number</option>
                    <option>string</option>
                </select>
                <label>List</label>
                <button></button>
                <label>Validation</label>
                <select>
                    <option>integer</option>
                    <option>float</option>
                </select>
            </div>
            <div>
                <button>Cancel</button>
                <button>Preview</button>
                <button>Create</button>
            </div>
        </div>
    )
}