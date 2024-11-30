import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://social-media-backed-gf9m.onrender.com/api/v1";

export const CreatePost = (caption, image) => async (dispatch) => {
    try {
        dispatch({ type: "CREATE_POST_REQUEST" });

        // Retrieve token
        const token = await AsyncStorage.getItem("token");
        if (!token) throw new Error("Authentication token is missing.");

        const { data } = await axios.post(
            `${BASE_URL}/post/upload`,
            { caption, image },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        dispatch({ type: "CREATE_POST_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "CREATE_POST_FAILURE",
            payload: error.response?.data?.message || "Create post failed",
        });
    }
};