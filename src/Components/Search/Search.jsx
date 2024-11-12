    import { useState, useEffect } from "react"
    import { useNavigate } from "react-router-dom"
    import { Link } from "react-router-dom";

    function Search({ employees }) {
        const [search, setSearch] = useState(null)
        const [filter, setFilter] = useState([])
        const [isClicked, setIsClicked] = useState(false)
        const navigate = useNavigate()

        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(search);
            const filteredArray = employees.filter((employee) => employee.name.toLowerCase().includes(search.toLowerCase()))
            setFilter(filteredArray)
            navigate(`/employees/${search}`)
            
        }

        const changeHandler = (setter) => (e) => {
            setter(e.currentTarget.value);
            
        };
        useEffect(() => {
            if (!search) {
                setFilter([]);
                setIsClicked(false)
            }
        }, [search]);
        console.log(isClicked);
        
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label className="form-label">Name:</label>
                    <div className="input-group mb-3">
                        <input onChange={changeHandler(setSearch)} type="text" className="form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>
                    <button onClick={()=> setIsClicked(true)} type="submit" className="btn btn-primary filter-btn">Search</button>
                </form>
                {search && isClicked &&
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
                
                }
            </>

        )

    }

    export default Search