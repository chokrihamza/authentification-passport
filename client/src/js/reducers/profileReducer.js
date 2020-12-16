import {
  POST_PROFILE,
  POST_PROFILE_FAIL,
  POST_PROFILE_SUCCESS,
  GET_OWNER_PROFILE,
  GET_OWNER_PROFILE_SUCCESS,
  GET_OWNER_PROFILE_FAIL,
  EMPTY_PROFILE,
} from "../constants/action-types";

// initialState
const initialState = {
  loadProfile: false,
  response: null,
  errors: null,
  profile: null,
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_PROFILE:
      return { ...state, loadProfile: true };
    case POST_PROFILE_SUCCESS:
      return { ...state, loadProfile: false, response: payload };
    case POST_PROFILE_FAIL:
      return { ...state, loadProfile: false, errors: payload };
      case GET_OWNER_PROFILE:
      return {
        ...state,
        loadProfile: true,
      };
      case GET_OWNER_PROFILE_SUCCESS:
      return {
        ...state,
        loadProfile: false,
        profile:payload,
       
      };
      case GET_OWNER_PROFILE_FAIL:
      return {
        ...state,
        loadProfile: false,
        errors:payload,
       
      };
    case EMPTY_PROFILE:
      return {
        ...state,
        loadProfile: false,
        response: null,
        errors: null,
        profile: null,
      };


    default:
      return state;
  }
};

export default profileReducer;
