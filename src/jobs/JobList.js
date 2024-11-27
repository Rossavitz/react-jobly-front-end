import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(function getJobsList() {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  return (
    <div className="JobList">
      {jobs.map((j) => (
        <JobCard
          key={j.id}
          id={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
        />
      ))}
    </div>
  );
}

export default JobList;
