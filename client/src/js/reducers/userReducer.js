import { REGISTER_FAIL, REGISTER_USER, REGISTER_SUCCESS } from '../constants/action-types.js'
import { LOGIN_FAIL, LOGIN_USER, LOGIN_SUCCESS } from '../constants/action-types.js'
import { GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAIL } from '../constants/action-types.js'
const initialState = {
      loading: false,
      user: null,
      errors: null


};


const userReducer = (state = initialState, { type, payload }) => {
      switch (type) {
            case REGISTER_USER: return {
                  ...state, loading: true,
            }
            case REGISTER_SUCCESS: return {
                  ...state,
                  loading: false,
                  user: payload
            }
            case REGISTER_FAIL: return {
                  ...state,
                  loading: false,
                  errors: payload

            }

            case LOGIN_USER: return {
                  ...state, loading: true,
            }
            case LOGIN_SUCCESS: return {
                  ...state,
                  loading: false,
                  token: payload
            }
            case LOGIN_FAIL: return {
                  ...state,
                  loading: false,
                  errors: payload

            }
            case GET_PROFILE: return {
                  ...state,
                  loading: true,
            }
            case GET_PROFILE_SUCCESS: return {
                  ...state,
                  loading: false,
                  isAuth: payload,
                  user: payload
            }
            case GET_PROFILE_FAIL: return {
                  ...state,
                  loading: false,
                  errors: payload

            }


            default: return state

      }
}

export default userReducer;