import { useNavigate } from "react-router-dom";

const JobCard = ({ job, deleteJob }) => {
  const navigate = useNavigate()
  return (
    <div className="card">
      <h3>{job.company}</h3>
      <p>Role:{job.role}</p>
      <p>Status:{job.status}</p>

      <button onClick={() => navigate(`/edit/${job.id}`)}>Edit</button>
      <button onClick={() => deleteJob(job.id)}>Delete</button>
    </div>
  );
};

export default JobCard;
