import { REGISTER_USER, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/action-types'
import { GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAIL } from '../constants/action-types.js'
import axios from 'axios'
export const register = newuser => async dispatsh => {
      dispatsh({ type: REGISTER_USER });
      try {
            const addRes = await axios.post('/user/register', newuser);
            dispatsh({
                  type: REGISTER_SUCCESS,
                  payload: addRes.data
            })
      } catch (error) {
            dispatsh({
                  type: REGISTER_FAIL,
                  payload: error.response.data
            })

      }




}

export const login = (credential) => async dispatsh => {

      dispatsh({ type: LOGIN_USER });
      try {
            const loginRes = await axios.post('/user/login', credential);
            localStorage.setItem('token', loginRes.data.token)
            dispatsh({
                  type: LOGIN_SUCCESS,
                  payload: loginRes.data
            })
      } catch (error) {
            dispatsh({
                  type: LOGIN_FAIL,
                  payload: error.response.data
            })
      }


}

export const getProfile = () => async dispatsh => {
      const token = localStorage.getItem('token');
      const config = {
            headers: {
                  Authorization: token
            },
      }
      dispatsh({ type: GET_PROFILE });
      try {
            const isAuth = await axios.get('/user/current', config);

            dispatsh({
                  type: GET_PROFILE_SUCCESS,
                  payload: isAuth.data
            })
      } catch (error) {
            dispatsh({
                  type: GET_PROFILE_FAIL,
                  payload: error.response.data
            })
      }

}