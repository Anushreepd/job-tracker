import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../Context/JobContext";

const AddJob = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const navigate = useNavigate();
  const { dispatch } = useContext(JobContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      company,
      role,
      status,
    };

    dispatch({ type: "ADD_JOB", payload: newJob });
    navigate("/jobs");
  };

  return (
    <div className="form-container">
      <h2>ADD JOB</h2>

      <form onSubmit={handleSubmit}>
        <label>Company</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label>Role</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <button type="submit">Save Job</button>
      </form>
    </div>
  );
};

export default AddJob;
