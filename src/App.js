import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./Pages/JobList";
import AddJob from "./Pages/AddJob";
import EditJob from "./Pages/EditJob";
import PageNotFound from "./Pages/PageNotFound";
import Header from "./Components/Header";
import { useState } from "react";

function App() {

  const [jobs, setJobs]= useState([]);

  function deleteJob(id) {
      setJobs(jobs.filter((job) => job.id != id))
  }
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/jobs" element={<JobList jobs={jobs} deleteJob ={deleteJob}/>} />
          <Route path="/add-job" element={<AddJob jobs={jobs} setJobs={setJobs}/>} />
          <Route path="/edit-job" element={<EditJob />} />
          <Route path= "*" element= {<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
