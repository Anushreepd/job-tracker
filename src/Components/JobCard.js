const JobCard = ({job, deleteJob}) => {
  return (
    <div className="card">
        <h3>{job.company}</h3>
        <p>Role:{job.role}</p>
        <p>Status:{job.status}</p>

        <button onClick={() => deleteJob(job.id)}>Delete</button>
      
    </div>  
  )
}

export default JobCard
