import axios from "axios";

const BASE_URL = "https://social-media-backed-gf9m.onrender.com/api/v1";

export const CreatePost = (caption, image, owner) => async (dispatch) => {
    try {
        dispatch({ type: "CREATE_POST_REQUEST" });
        const { data } = await axios.post(`${BASE_URL}/post/upload`, {
            caption,
            image,
            owner
        });
        dispatch({ type: "CREATE_POST_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "CREATE_POST_FAILURE",
            payload: error.response?.data?.message || "Create post failed",
        });
    }
};