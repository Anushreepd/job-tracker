import JobCard from "../Components/JobCard";

const JobList = () => {
  const jobs = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Developer",
      status: "Applied",
      date: "2024-01-22",
    },
    {
      id: 2,
      company: "Amazon",
      role: "React Engineer",
      status: "Interview",
      date: "2024-01-20",
    },
  ];

  return (
    <div>
      <h2>List of Job</h2>
        {jobs.length > 0 ? (jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))) : <p>No jobs added yet</p>}

    </div>
  );
};

export default JobList;
