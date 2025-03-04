import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteButton from "./components/DeleteButton";
import FilterInputs from "../../FilterInputs/FilterInputs";


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
  const ITEMS_PER_PAGE = 10;
  
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(employees.length / ITEMS_PER_PAGE)

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentEmployees = filteredEmployees.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const handleSort = () => {
    currentEmployees.sort((a, b) => {
      const nameA = a.nameObj[filter.name].toLowerCase() 
      const nameB = b.nameObj[filter.name].toLowerCase() 

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
  }
  return (
    <>
  <FilterInputs onSubmit={setFilter}/>
 <table className="table table-striped table-bordered">
    <thead>
      <tr>
        <th onClick={upadtedEmployees.sort((a, b) => a.nameObj - b.nameObj)}>Name</th>
        <th>Level</th>
        <th>Position</th>
        <th>Equipment</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {currentEmployees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.name}</td>
          <td>{employee.level}</td>
          <td>{employee.position}</td>
          <td>{employee.equipment}</td>
          
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
    <button className="btn info" onClick={()=>handlePageChange(currentPage - 1)} disabled={currentPage  === 1}>
      Previous
    </button>
    {[...Array(totalPages)].map((value, i) => (
      <button className="btn info" key={i}  onClick={()=>handlePageChange(i + 1)} style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal", margin: "0 5px"}}>
        {i + 1}
        
      </button>
    ))
    
    }
    
    <button className="btn info" onClick={()=>handlePageChange(currentPage + 1)} disabled={currentPage  === totalPages}>
      Next
    </button>
 </>
  )
}
  



export default EmployeeTable;
