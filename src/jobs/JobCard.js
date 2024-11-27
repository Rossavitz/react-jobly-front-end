import React, { useContext, useState } from "react";
import "./JobCard.css";
import UserContext from "../auth/UserContext";

function JobCard({ id, title, salary, equity, companyName }) {
  const { hasAppliedForJob, applyForJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  async function handleApply(e) {
    if (hasAppliedForJob(id)) return;
    applyForJob(id);
    setApplied(true);
  }

  React.useEffect(
    function updateApplied() {
      setApplied(hasAppliedForJob(id));
    },
    [id, hasAppliedForJob]
  );

  return (
    <div className="JobCard-body">
      <h4>{companyName}</h4>
      <p>Job Id: {id}</p>
      <p>Title: {title}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button onClick={handleApply} disable={applied}>
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  );
}

export default JobCard;
