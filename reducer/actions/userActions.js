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
                withCredentials: true,
            }
        );
        console.log(data);

        dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error.response?.data?.message || "Login failed",
        });
    }
};

export const RegisterUser = (name, email, password, avatar) => async (dispatch) => {
    try {
        dispatch({ type: "REGISTER_USER_REQUEST" });
        const { data } = await axios.post(
            `${BASE_URL}/register`,
            { name, email, password, avatar },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({ type: "REGISTER_USER_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "REGISTER_USER_FALURE",
            payload: error.response?.data?.message || "Register failed",
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
        await axios.get(`${BASE_URL}/logout`);
        dispatch({ type: "LOGOUT_USER_SUCCESS" });
    } catch (error) {
        dispatch({
            type: "LOGOUT_USER_FAILURE",
            payload: error.response?.data?.message || "Logout failed",
        });
    }
};

export const ForgotPasswordUser = (email) => async (dispatch) => {
    try {
        dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
        const { data } = await axios.post(`${BASE_URL}/forgot/password`,
            { email },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({ type: "FORGOT_PASSWORD_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "FORGOT_PASSWORD_FAILURE",
            payload: error.response?.data?.message || "Forgot password failed",
        });
    }
};

export const getAllUser = (name) => async (dispatch) => {
    try {
        dispatch({ type: "GET_ALL_USER_REQUEST" });
        const { data } = await axios.get(`/api/v1/users?name=${name}`);
        dispatch({ type: "GET_ALL_USER_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "GET_ALL_USER_FAILURE",
            payload: error.response?.data?.message || "User not found",
        });
    }
};
