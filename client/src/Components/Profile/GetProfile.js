import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOwnerProfile } from "../../js/actions/actionprofile";
import "./GetProfile.css";
import { Redirect } from "react-router-dom";
import Edit78 from "../../icons/edit-78";
import TrashSimple from "../../icons/trash-simple";
function GetProfile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOwnerProfile());
  }, []);
  const user = useSelector((state) => state.profileReducer.profile.user);
  const profile = useSelector((state) => state.profileReducer.profile);
  const loadProfile = useSelector((state) => state.profileReducer.loadProfile);

  if (!user) {
    return <Redirect to="/" />;
  } else if (loadProfile) {
    return <h1>loading</h1>;
  } else {
    return (
      <div className="card-item">
        <div className="card-header">
          <div className="card-header__bg"></div>
          <img src={profile.image} className="card-header__img" />
          <div class="card-process">
            <button href="#" class="process__item">
              <div class="process-icon follow">
               <Edit78/>
              </div>
              <span class="process-txt">Edit</span>
            </button>
            <button href="#" class="process__item">
              <div class="process-icon message">
                <TrashSimple/>
              </div>
              <span class="process-txt">Delete</span>
            </button>
          </div>
          <div className="card-header__text">
            <span className="card-header__name">{user.name}</span>
            <span className="card-header__job">{user.phoneNumber}</span>
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
            <p className="card-detail__str1">{profile.farmerDomaine}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default GetProfile;
