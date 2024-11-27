import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routes/Routes";
import NavBar from "./routes/NavBar";
import JoblyApi from "./api";
import { jwtDecode } from "jwt-decode";
import UserContext from "./auth/UserContext";
import useLocalStorage from "./localStorageHook";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currUser, setCurrUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  useEffect(
    function getUserInfo() {
      async function getCurrUser() {
        if (token) {
          try {
            let { username } = jwtDecode(token);
            JoblyApi.token = token;
            let currUser = await JoblyApi.getCurrUser(username);
            setCurrUser(currUser);
            setApplicationIds(new Set(currUser.applications));
          } catch (e) {
            console.log("app getuserinfo: problem loading", e);
            setCurrUser(null);
          }
        }
      }
      getCurrUser();
    },
    [token]
  );

  async function signup(formData) {
    let token = await JoblyApi.signup(formData);
    setToken(token);
  }

  async function login(data) {
    let token = await JoblyApi.login(data);
    setToken(token);
  }

  async function logout() {
    setCurrUser(null);
    setToken(null);
  }

  function hasAppliedForJob(id) {
    return applicationIds.has(id);
  }

  function applyForJob(id) {
    if (hasAppliedForJob(id)) return;
    JoblyApi.applyForJob(currUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currUser, setCurrUser, hasAppliedForJob, applyForJob }}
        >
          <NavBar logout={logout} />
          <RoutesList signup={signup} login={login} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
