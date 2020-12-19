import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOwnerProfile } from "../../js/actions/actionprofile";
import "./GetProfile.css";
import { Redirect } from "react-router-dom";
import { Spinner } from 'reactstrap';

function GetProfile() {
  
  const user = useSelector((state) => state.profileReducer.profile.user);
  const profile = useSelector((state) => state.profileReducer.profile);
  const loadProfile = useSelector((state) => state.profileReducer.loadProfile);
  const token = localStorage.getItem("token");
  
  if (!token) {
    return <Redirect to="/" />;
  } else if (loadProfile) {
    return <Spinner style={{
      position: 'absolute', left: '50%', top: '50%',
      
      }}
        color="primary" />;
  } else {
    return (
      
      <div className="card-item" > 
      
        <div className="card-header">
          <div className="card-header__bg"></div>
          <img src={profile.image} className="card-header__img" />
          <div className="card-process">
            <button href="#" className="process__item">
              <div className="process-icon follow">
              <i className="far fa-edit"></i>
                
              </div>
              <span className="process-txt">Edit</span>
            </button>
            <button href="#" className="process__item">
              <div className="process-icon message">
              <i className="fas fa-trash-alt"></i>
               
              </div>
              <span className="process-txt">Delete</span>
            </button>
          </div>
          <div className="card-header__text">
          
            <span className="card-header__name">{user.name}</span>
             <span className="card-header__job">Phone:{user.phoneNumber}</span>
             <span className="card-header__job">email:{user.email}</span>
            
          </div>
        </div>
        <ul className="card-detail">
          <li className="card-detail__li">
            <p className="card-detail__txt">Location:</p>
            <p className="card-detail__str">{profile.location}</p>
          </li>
          <li className="card-detail__li">
            <p className="card-detail__txt">adresse:</p>
            <p className="card-detail__str">{profile.adresse}</p>
          </li>
          <li className="card-detail__li">
            <p className="card-detail__txt">Farmer Domaine:</p>
            <ul>
            {profile.farmerDomaine.map((e, i) => (
              <li  key={i} className="card-detail__str1" colSpan="2">{e}</li>
             ))}
             </ul>
          </li>

        </ul>
        <i className="card-header__job">CreatedAt:{profile.updatedAt}</i>
          </div>
     
      
    );
  }
}

export default GetProfile;
