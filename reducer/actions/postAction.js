import axios from "axios";

const BASE_URL = "https://social-media-backed-gf9m.onrender.com/api/v1";

export const CreatePost = (caption, image) => async (dispatch) => {
    try {
        dispatch({ type: "CREATE_POST_REQUEST" });
        const payload = {
            caption,
            image,
        };
        const { data } = await axios.post(`${BASE_URL}/post/upload`, payload, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        dispatch({ type: "CREATE_POST_SUCCESS", payload: data });
    } catch (error) {
        const errorMessage =
            error.response?.data?.message || "Failed to create the post";
        dispatch({
            type: "CREATE_POST_FAILURE",
            payload: errorMessage,
        });
        console.error("Create Post Error:", errorMessage);
    }
};
