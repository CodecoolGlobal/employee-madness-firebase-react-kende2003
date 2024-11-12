import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

function Search({ employees }) {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search);
        const filteredArray = employees.filter((employee) => employee.name.toLowerCase().includes(search))
        setFilter(filteredArray)
        navigate(`/employees/${search}`)
    }

    const changeHandler = (setter) => (e) => {
        setter(e.currentTarget.value);

    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="form-label">Name:</label>
                <div className="input-group mb-3">
                    <input onChange={changeHandler(setSearch)} type="text" className="form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                </div>
                <button type="submit" className="btn btn-primary filter-btn">Search</button>
            </form>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Position</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {filter.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.level}</td>
                            <td>{employee.position}</td>
                            <td>
                                <div className="btn-group">
                                </div>
                            </td>
                            <div>
                                <Link to={`/update/${employee.id}`} className="btn btn-primary">
                                    Update
                                </Link>

                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    )

}

export default Search