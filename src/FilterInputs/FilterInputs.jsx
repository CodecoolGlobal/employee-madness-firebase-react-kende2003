import { useState } from "react";
import "./style.css";

function FilterInputs({ onSubmit }) {
    const [position, setPosition] = useState("")
    const [level, setLevel] = useState("")
    const [name, setName] = useState("first")
    const [direction, setDirection] = useState("asc")

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({
            position,
            level,
            name,
            direction

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
            <label className="form-label">Order by</label>
        <select
            className="form-select order"
            name="order-by-name"
            onChange={changeHandler(setName)}>
            <option value="first">First Name</option>
            <option value="middle">Middle Name</option>
            <option value="last">Last Name</option>
        </select>
        <label className="form-label">Direction</label>
        <select
            className="form-select direction"
            name="order-by-name"
            onChange={changeHandler(setDirection)}>
            <option defaultValue="asc">asc</option>
            <option value="dsc">dsc</option>
        </select>
        <button type="submit" className="btn btn-primary filter-btn">Search</button>
        </form>

    )
}

export default FilterInputs