import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({ name, description, handle }) {
  return (
    <Link className="CompanyCard card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
