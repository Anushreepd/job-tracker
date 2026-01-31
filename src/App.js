import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./Pages/JobList";
import AddJob from "./Pages/AddJob";
import EditJob from "./Pages/EditJob";
import PageNotFound from "./Pages/PageNotFound";
import Header from "./Components/Header";
import { useState,useEffect } from "react";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
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

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
