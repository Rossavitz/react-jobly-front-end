import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanySearchForm = ({ search }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search(formData);
    setFormData("");
    navigate("/companies");
  };

  return (
    <div className="companySearchForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="companySearch">Search by Company:</label>
        <input
          type="text"
          name="companySearch"
          placeholder="Enter Company Name..."
          value={formData.companySearch}
          onChange={handleChange}
        />
        <button type="submit" id="search">
          Search
        </button>
      </form>
    </div>
  );
};

export default CompanySearchForm;
