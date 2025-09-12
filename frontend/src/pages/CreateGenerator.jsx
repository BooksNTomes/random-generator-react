import { useState } from "react";

export default function CreateGenerator(){

    const [genFormData, setGenFormData] = useState({
        name: '',
        description: '',
        image: '',
        type: '',
        list: [],
        validation: '',
    });

    const handleFormChange = (element) => {
        const {name, value} = element.target;
        setGenFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // Temporarily not implementing images

    const handleFormSubmit = (element) => {
        element.preventDefault();

    }

    return (
        <form onSubmit={handleFormSubmit} className='browser-size m-auto full-bottom'>
            <div>
                <div>
                    <h4>Name</h4>
                    <input type="text"></input>
                    <h4>Description</h4>
                    <input type="text"></input>
                </div>
                <div>
                    <h4>Image</h4>
                    <input type="image"></input>
                </div>
            </div>
            <div>
                <div>
                    <h4>Type</h4>
                    <select></select>
                </div>
                <div>
                    <h4>List</h4>
                    <input type="text"></input>
                </div>
                <div>
                    <h4>Validation</h4>
                    <select></select>
                </div>
            </div>
            <div>
                <button>Cancel</button>
                <button>Preview</button>
                <button type="submit">Save</button>
            </div>
        </form>
    )
}