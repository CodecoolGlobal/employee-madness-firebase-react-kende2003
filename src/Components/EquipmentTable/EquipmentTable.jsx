import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import DeleteButton from "./components/DeleteButton";
function EquipmentsTable({ equipments, onDelete }) {


    return(
        <>
    <table className="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {equipments.map((equipment) => (
                <tr key={equipment.id}>
                <td>{equipment.name}</td>
                <td>{equipment.type}</td>
                <td>{equipment.amount}</td>
                <td>
                  <div className="btn-group">
                    <Link  to={`/equipments/update/${equipment.id}`} className="btn btn-primary">
                      Update
                    </Link>
                    <DeleteButton equipmentId={equipment.id} onDelete={onDelete}/>
                  </div>
                </td>
              </tr>
      
      ))
      }
    </tbody>
  </table>
  <Link to={`/equipments/create`} className="btn btn-primary create-btn">
  Create Equipment
  </Link>
        </>
    )
}

export default EquipmentsTable