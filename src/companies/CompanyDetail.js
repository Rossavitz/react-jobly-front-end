import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import { useParams } from "react-router-dom";
import JobCard from "../jobs/JobCard";

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState([]);

  useEffect(
    function getCompanyDetails() {
      async function getCompany() {
        setCompany(await JoblyApi.getCompany(handle));
      }
      getCompany();
    },
    [handle]
  );
  console.log(company);
  return (
    <div>
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      {company.jobs
        ? company.jobs.map((j) => (
            <JobCard
              id={j.id}
              title={j.title}
              salary={j.salary}
              equity={j.equity}
              companyName={j.companyName}
            />
          ))
        : ""}
    </div>
  );
}

export default CompanyDetail;
