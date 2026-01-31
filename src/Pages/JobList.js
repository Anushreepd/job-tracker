import { useContext, useState } from "react";
import JobCard from "../Components/JobCard";
import { JobContext } from "../Context/JobContext";
import Header from "../Components/Header";

function JobList() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const { jobs, dispatch } = useContext(JobContext);

  const filters = jobs.filter((job) => {
    const matchSearch = job.company
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus = statusFilter === "All" || job.status === statusFilter;

    return matchSearch && matchStatus;
  });

  function deleteJob(id) {
    dispatch({ type: "DELETE_JOB", payload: id });
  }

  return (
    <div className="container">
      <Header />
      <h2>JOB APPLICAIONS</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search By Company"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {filters.length === 0 && <p className="empty-text">No jobs found</p>}

      {filters.map((job) => (
        <JobCard key={job.id} job={job} deleteJob={deleteJob} />
      ))}
    </div>
  );
}

export default JobList;
