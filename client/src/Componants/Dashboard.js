import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../js/actions/actionUser";
const Dashboard = ({user}) => {


  const dispatch = useDispatch();
  const history = useHistory();
  
  return (
    <div>
      <h1 className="mt-4">Dashboard</h1>
      <p className="lead mb-3">
        Welcome {user.name} we are happy to see you again
      </p>
      <button className="btn btn-secondary" onClick={() => { dispatch(logout()); history.push("/") }}>Logout</button>
    </div>
  );
};

export default Dashboard;



