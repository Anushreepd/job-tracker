import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { JobContext } from "../Context/JobContext";

const AddJob = ({ jobs, setJobs }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const navigate = useNavigate();
  const { dispatch } = useContext(JobContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      company,
      role,
      status,
    };

    dispatch({ type: "ADD_JOB", payload: newJob})
    navigate("/jobs");
  };

  return (
    <>
      <h2>Add Job Page</h2>

      <form onSubmit={handleSubmit}>
        <label>Company</label>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label>Role</label>
        <input
          type="text"
          placeholder="role"
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

        <button>Save Job</button>
      </form>
    </>
  );
};

export default AddJob;
