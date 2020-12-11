import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getProfile } from '../js/actions';
import { useEffect } from 'react'
import Dashboard from './Dashboard';

const Profile = () => {
      const isAuth = useSelector(state => state.userReducer.isAuth)
      const user = useSelector(state => state.userReducer.user)
      const loading = useSelector(state => state.userReducer.loading)
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(getProfile());

      }, []);

      return (
            loading ? <h1>loading</h1> : !isAuth ? (<Redirect to='/login' />) :
                  <div>

                        { /* <h1>{JSON.stringify(user)}</h1>*/}

                        <Dashboard user={user} />
                  </div>
      )
}

export default Profile
