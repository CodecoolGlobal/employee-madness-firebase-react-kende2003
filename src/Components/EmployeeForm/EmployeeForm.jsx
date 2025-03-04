const EmployeeForm = ({ onSave, disabled = false, employee, onCancel }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];
    const employee = Object.fromEntries(entries);
    return onSave(employee);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">Name:</label>
        <input
          className="form-control"
          defaultValue={employee ? employee.name : null}
          name="name"
          id="name"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="level">Level:</label>
        <input
          className="form-control"
          defaultValue={employee ? employee.level : null}
          name="level"
          id="level"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="position">Position:</label>
        <input
          className="form-control"
          defaultValue={employee ? employee.position : null}
          name="position"
          id="position"

        />
      </div>
      <label className="form-label" htmlFor="equipment">Equipment:</label>
      <select name="equipment" class="form-select" aria-label="Default select example" id="equipment"style={{marginBottom:"1rem"}}>
          <option value="C#">C#</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
      </select>

      <div className="d-flex justify-content-start gap-3">
        <button type="submit" className="btn btn-primary" disabled={disabled}>
          {employee ? "Update Employee" : "Create Employee"}
        </button>

        <button className="btn btn-danger" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
