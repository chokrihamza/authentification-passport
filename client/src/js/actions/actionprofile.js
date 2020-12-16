import {
  
  POST_PROFILE,
  POST_PROFILE_SUCCESS,
  POST_PROFILE_FAIL,
  GET_OWNER_PROFILE,
  GET_OWNER_PROFILE_FAIL,
  GET_OWNER_PROFILE_SUCCESS,
  EMPTY_PROFILE,

} from "../constants/action-types.js";
import axios from "axios";



// post profile
export const postProfile = (user) => async (dispatsh) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatsh({ type: POST_PROFILE });
  try {
    const result = await axios.post("/profile", user, config);
    dispatsh(
      { type: POST_PROFILE_SUCCESS, payload: result.data.message }
     
    );
  } catch (error) {
    dispatsh({
      type: POST_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};

// get owner profile

export const getOwnerProfile = () => async (dispatsh) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatsh({ type: GET_OWNER_PROFILE });
  try {
     const result = await axios.get("/profile/owner",config) 
     dispatsh({type: GET_OWNER_PROFILE_SUCCESS, payload:result.data})
  } catch (error) {
      dispatsh({type: GET_OWNER_PROFILE_FAIL, payload:error.response.data})
  }
};

export const EmptyProfile = () => {
  return { type: EMPTY_PROFILE }

}

