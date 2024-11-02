import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteButton from "./components/DeleteButton";
import FilterInputs from "../../FilterInputs";



const EmployeeTable = ({ employees, onDelete }) => {
  const [filter, setFilter] = useState(
    {
      position: "",
      level: "",
    }
  )
  console.log(filter);
  
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  console.log(filteredEmployees);
  

  useEffect(() => {
    console.log("Filter updated:", filter); 
    console.log("Employees array:", employees); 
    if (filter.position || filter.level) {
      const newFilteredEmployees = employees.filter((employee) => {
        console.log("Filter updated:", filter); 
        console.log("Employees array:", employees); 
        const matchesPosition = filter.position ? employee.position.includes(filter.position) : true
        const matchesLevel = filter.level ? employee.level.includes(filter.level) : true
        return matchesPosition && matchesLevel
      })
      setFilteredEmployees(newFilteredEmployees)
    }
    else {
      setFilteredEmployees(employees)
    }
  }, [filter, employees])
  
  return (
    <>
  <FilterInputs onSubmit={setFilter}/>
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
      {filteredEmployees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.name}</td>
          <td>{employee.level}</td>
          <td>{employee.position}</td>
          <td>
            <div className="btn-group">
              <Link to={`/update/${employee.id}`} className="btn btn-primary">
                Update
              </Link>
              <DeleteButton employeeId={employee.id} onDelete={onDelete} />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

 </>
  )
}
  



export default EmployeeTable;
