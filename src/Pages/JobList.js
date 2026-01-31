import { useContext } from "react";
import JobCard from "../Components/JobCard";
import { JobContext } from "../Context/JobContext";

function JobList() {
  const { jobs, dispatch } = useContext(JobContext);

  function deleteJob(id) {
    dispatch({ type: "DELETE_JOB", payload: id });
  }

  return (
    <div>
      <h2>Job Applications</h2>

      {jobs.length === 0 && <p>No jobs added yet</p>}

      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          deleteJob={deleteJob}
        />
      ))}
    </div>
  );
}

export default JobList;
