import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

function NavBar({ logout }) {
  const { currUser } = useContext(UserContext);

  function currUserNav() {
    return (
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/companies">Companies</NavLink>
        </li>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <Link to="/" onClick={logout}>
            Log out {currUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  function noCurrUserNav() {
    return (
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    );
  }

  return <nav>{currUser ? currUserNav() : noCurrUserNav()}</nav>;
}

export default NavBar;
