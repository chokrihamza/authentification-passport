import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userReducer } from '../js/reducers/userReducer';
import { Redirect } from 'react-router-dom';
import { getProfile } from '../js/actions';
import { useEffect } from 'react'
import Dashboard from './Dashboard';

const Profile = () => {

      const dispatch = useDispatch()
      useEffect(() => {
            dispatch(getProfile());

      }, [])
      const isAuth = useSelector(state => state.userReducer.isAuth)
      const user = useSelector(state => state.userReducer.user)
      const loading = useSelector(state => state.userReducer.loading)
      return (
            loading ? <h1>loading</h1> : !isAuth ? (<Redirect to='/login' />) :
                  <div>

                        { /* <h1>{JSON.stringify(user)}</h1>*/}

                        <Dashboard user={user} />
                  </div>
      )
}

export default Profile
