import { createContext, useReducer } from "react";
import { jobReducer } from "./JobReducer";

export const JobContext = createContext();

function JobProvider({ children }) {
  const [jobs, dispatch] = useReducer(jobReducer, []);

  return (
    <JobContext.Provider value={{ jobs, dispatch }}>
      {children}
    </JobContext.Provider>
  );
}

export default JobProvider;
