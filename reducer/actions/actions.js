import axios from "axios";

const BASE_URL = "https://social-media-backed-gf9m.onrender.com/api/v1";

export const LoginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_REQUEST" });
        const { data } = await axios.post(
            `${BASE_URL}/login`,
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error.response?.data?.message || "Login failed",
        });
    }
};

export const GetMyProfile = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_MY_PROFILE_REQUEST" });
        const { data } = await axios.get(`${BASE_URL}/me`);
        dispatch({ type: "GET_MY_PROFILE_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_MY_PROFILE_FAILURE",
            payload: error.response?.data?.message || "Failed to load profile",
        });
    }
};

export const LoadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "LOAD_USER_REQUEST" });
        const { data } = await axios.get(`${serverUrl}/me`);
        dispatch({ type: "LOAD_USER_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "LOAD_USER_FAILURE",
            payload: error.response?.data?.message || "Failed to load the user",
        });
    }
};

export const Logout = () => async (dispatch) => {
    try {
        dispatch({ type: "LOGOUT_USER_REQUEST" });
        const { data } = await axios.get(`${BASE_URL}/logout`);
        console.log(data)
        dispatch({ type: "LOGOUT_USER_SUCCESS" });
    } catch (error) {
        dispatch({
            type: "LOGOUT_USER_FAILURE",
            payload: error.response?.data?.message || "Logout failed",
        });
    }
};
