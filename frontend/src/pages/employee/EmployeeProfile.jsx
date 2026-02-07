import { useParams } from "react-router-dom";

function EmployeeProfile() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Employee Profile</h2>

      <p><b>ID:</b> {id}</p>
      <p><b>Name:</b> Alice</p>
      <p><b>Role:</b> Engineer</p>
      <p><b>Department:</b> Backend</p>
    </div>
  );
}

export default EmployeeProfile;