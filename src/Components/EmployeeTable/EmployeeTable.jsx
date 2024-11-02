import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteButton from "./components/DeleteButton";
import FilterInputs from "../../FilterInputs";


const EmployeeTable = ({ employees, onDelete }) => {
  const [upadtedEmployees, setUpdatedEmployess] = useState(employees)
  const [filteredEmployees, setFilteredEmployees] = useState(upadtedEmployees);
  const [filter, setFilter] = useState(
    {
      position: "",
      level: "",
      name: "",
      direction: ""
    }
  )
  console.log(filter);
  useEffect(() => {
    setUpdatedEmployess(
       employees.map((employee) => {
        const split = employee.name.split(" ")
        let splittedName = {
    
        }
        split.length === 2 ? (splittedName = {
          first: split[0],
          last: split[1]
        })
        :  splittedName = {
            first: split[0],
            middle: split[1],
            last: split[2]
        }
        return {...employee, nameObj: splittedName}
    
       })
     
    )    
  }, [employees])
  
  console.log(upadtedEmployees);
  
  
    useEffect(() => {
      let newFilteredEmployees = [...upadtedEmployees];
  
      if (filter.position) {
          newFilteredEmployees = newFilteredEmployees.filter((employee) =>
              employee.position.toLowerCase().includes(filter.position.toLowerCase())
          );
      }
  
      if (filter.level) {
          newFilteredEmployees = newFilteredEmployees.filter((employee) =>
              employee.level.toLowerCase().includes(filter.level.toLowerCase())
          );
      }
  
      if (filter.name && filter.direction) {
          newFilteredEmployees.sort((a, b) => {
            const nameA = a.nameObj[filter.name].toLowerCase() 
            const nameB = b.nameObj[filter.name].toLowerCase() 

              if (nameA < nameB) return filter.direction === "asc" ? -1 : 1;
              if (nameA > nameB) return filter.direction === "asc" ? 1 : -1;
              return 0;
          });
      }
  

      setFilteredEmployees(newFilteredEmployees);
  }, [filter, employees, upadtedEmployees]);
  
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
