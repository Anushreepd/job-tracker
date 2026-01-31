import React, { useContext, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { JobContext } from "../Context/JobContext";
import { type } from "@testing-library/user-event/dist/type";

const EditJob = () => {
  const {id} = useParams()

  const navigate = useNavigate()
  const {jobs, dispatch} = useContext(JobContext)

  const jobsToEdit = jobs.find(
    (jobs) =>  jobs.id === Number(id)
  )

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "UPDATE_JOB",
      payload: {
        id: jobsToEdit.id,
        company,
        role,
        status,
      },
    })
    navigate("/jobs");
  }

  const [company, setCompany] = useState(jobsToEdit.company);
  const [role, setRole] = useState(jobsToEdit.role);
  const [status, setStatus] = useState(jobsToEdit.status);

  return (<>
    <h2>Edit Job Page</h2>
    <form onSubmit={handleSubmit}>
      <input type = "Text"
      placeholder='Company'
      value= {company}
      onChange={(e) => setCompany(e.target.value)} />


      <input type = "Text"
      placeholder='Role'
      value= {role}
      onChange={(e) => setRole(e.target.value)} />


      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button type="submit">Update Job</button>

    </form>

    </>
  
  )
}

export default EditJob
