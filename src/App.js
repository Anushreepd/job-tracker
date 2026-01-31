import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./Pages/JobList";
import AddJob from "./Pages/AddJob";
import EditJob from "./Pages/EditJob";
import PageNotFound from "./Pages/PageNotFound";
import { useState,useEffect } from "react";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/jobs"
            element={<JobList />}
          />
          <Route
            path="/add-job"
            element={<AddJob />}
          />
          <Route
            path="/edit/:id"
            element={<EditJob />}
          />

          <Route
            index
            element={<JobList />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
