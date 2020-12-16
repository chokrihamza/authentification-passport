import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser } from '../js/actions/actionUser';
import { useEffect } from 'react'
import Dashboard from './Dashboard';
import { getOwnerProfile } from '../js/actions/actionprofile';

const Profile = () => {
      const profile = useSelector(state => state.profileReducer.profile)
      const user = useSelector(state => state.userReducer.user)
      const loadUser = useSelector(state => state.userReducer.loadUser)
      const loadProfile = useSelector(state => state.profileReducer.loadProfile)
      const dispatch = useDispatch();


      useEffect(() => {
            dispatch(getOwnerProfile());
            dispatch(getUser());
      }, []);
      if (loadProfile && loadUser) {
            return <h1>loading</h1>
      } else if (!user) {
            return <Redirect to="/login" />
      } else {
            return (<div>
                  <Dashboard user={user} />
            </div>)
      }
}

export default Profile
