import { useParams } from "react-router-dom";

function EditEmployee() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Edit Employee</h2>
      <p>Editing Employee ID: <b>{id}</b></p>

      <form>
        <input placeholder="Name" />
        <input placeholder="Role" />
        <input placeholder="Department" />
        <button>Update Employee</button>
      </form>
    </div>
  );
}

export default EditEmployee;