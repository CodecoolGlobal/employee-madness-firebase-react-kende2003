import { useState } from "react";
import "./style.css";

function FilterInputs({ onSubmit }) {
    const [position, setPosition] = useState(null)
    const [level, setLevel] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({
            position,
            level
        })
    } 
    const changeHandler = (setter) => (e) => {
        setter(e.currentTarget.value);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input onChange={changeHandler(setPosition)} type="text" className="form-control" placeholder="Position" aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
            <div className="input-group mb-3">
                <input onChange={changeHandler(setLevel)} type="text" className="form-control" placeholder="Level" aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
        <button type="submit" className="btn btn-primary filter-btn">Search</button>
        </form>

    )
}

export default FilterInputs