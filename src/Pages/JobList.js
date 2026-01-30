import JobCard from "../Components/JobCard";

function JobList({ jobs, deleteJob }) {
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
