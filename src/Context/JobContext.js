import { createContext, useEffect, useReducer } from "react";
import { jobReducer } from "./JobReducer";

export const JobContext = createContext();

function JobProvider({ children }) {

  const initialValue = () => {
    const storedData = localStorage.getItem("jobs");

    if (!storedData || storedData === "undefined") {
      return [];
    }

    try {
      return JSON.parse(storedData);
    } catch {
      return [];
    }
  };

  const [jobs, dispatch] = useReducer(jobReducer, [], initialValue);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
    <JobContext.Provider value={{ jobs, dispatch }}>
      {children}
    </JobContext.Provider>
  );
}

export default JobProvider;
