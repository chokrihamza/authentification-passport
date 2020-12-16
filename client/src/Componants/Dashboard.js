import React from "react";
import FlashMessage from "react-flash-message";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../js/actions/actionUser";
import NavbarPage from '../Componants/Layout/Navbar';
const Dashboard = ({user}) => {


  const dispatch = useDispatch();
  const history = useHistory();
  
  return (
    <div>
      <NavbarPage />
      <FlashMessage duration={2000}>
        <div className="alert alert-info" role="alert">
          Welcome {user.name} we are happy to see you
              </div>
      </FlashMessage>


    </div>
  );
};

export default Dashboard;



