import NavCrumbs from "../NavCrumbs";

export default function CreateGeneratorPopup({closeHandler}) {

    return(
        <div>
            <NavCrumbs></NavCrumbs>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text"></input>
                    <label>Description</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Image</label>
                    <input type="image"></input>
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
                <button onClick={closeHandler}>Cancel</button>
                <button>Preview</button>
                <button>Create</button>
            </div>
        </div>
    )

}