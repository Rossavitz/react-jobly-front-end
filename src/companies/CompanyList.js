import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import CompanySearchForm from "./CompanySearchForm";

function CompaniesList() {
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompaniesList() {
    search();
  }, []);

  async function search(name) {
    let company = await JoblyApi.getCompanies(name);
    setCompanies(company);
  }

  return (
    <div className="CompanyList">
      <CompanySearchForm search={search} />
      {companies.map((c) => (
        <CompanyCard
          key={c.handle}
          handle={c.handle}
          name={c.name}
          description={c.description}
        />
      ))}
    </div>
  );
}

export default CompaniesList;
