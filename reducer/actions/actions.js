import axios from "axios";

const BASE_URL = "https://social-media-backed-gf9m.onrender.com/api/v1";
export const LoginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_REQUEST" });
        const { data } = await axios.post(`${BASE_URL}/login`, { email, password }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error.response?.data?.message });
    }
};

export const GetMyProfile = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "GET_MY_PROFILE" });
        const { data } = await axios.get(`${BASE_URL}/me`);
        dispatch({ type: "GET_MY_PROFILE_SUCESS", payload: data });
    } catch (error) {
        dispatch({ type: "GET_MY_PROFILE_FAILUR", payload: error.response?.data?.message });
    }
};
export const Logout = () => async (dispatch) => {
    try {
        dispatch({ type: "LOGOUT_USER" });
        await axios.get(`${BASE_URL}/logout`);
        console.log("User logged out successfully");
    } catch (error) {
        alert(error)
    }
};

