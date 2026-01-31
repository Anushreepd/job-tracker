import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { JobContext } from "../Context/JobContext";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, dispatch } = useContext(JobContext);

  const jobToEdit = jobs.find(
    (job) => job.id === Number(id)
  );

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  // ✅ Sync state when job is available
  useEffect(() => {
    if (jobToEdit) {
      setCompany(jobToEdit.company);
      setRole(jobToEdit.role);
      setStatus(jobToEdit.status);
    }
  }, [jobToEdit]);

  if (!jobToEdit) {
    return <p>Loading job...</p>;
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "UPDATE_JOB",
      payload: {
        id: jobToEdit.id,
        company,
        role,
        status,
      },
    });

    navigate("/jobs");
  }

  return (
    <div className="form-container">
      <h2>EDIT JOB</h2>

      <form onSubmit={handleSubmit}>
        <label>Company</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label>Role</label>
        <input
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

        <button type="submit">Update Job</button>
      </form>
    </div>
  );
};

export default EditJob;
