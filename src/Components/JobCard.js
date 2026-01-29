const JobCard = ({job}) => {
  return (
    <div className="card">
        <h3>{job.company}</h3>
        <p>Role:{job.role}</p>
        <p>Date:{job.date}</p>
        <p>Status:{job.status}</p>
      
    </div>  
  )
}

export default JobCard
