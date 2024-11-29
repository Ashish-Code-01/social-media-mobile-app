import axios from "axios";

const BASE_URL = "https://social-media-backed-gf9m.onrender.com/api/v1";

export const CreatePost = (caption, image) => async (dispatch, getState) => {
    try {
        dispatch({ type: "CREATE_POST_REQUEST" });

        // Retrieve token from Redux state (or AsyncStorage if stored there)
        const { auth } = getState();
        const token = auth?.token;

        if (!token) {
            throw new Error("Authentication token is missing. Please log in.");
        }

        // Make the API call with token in headers
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
        const errorMessage =
            error.response?.data?.message || error.message || "Failed to create the post";
        dispatch({ type: "CREATE_POST_FAILURE", payload: errorMessage });

        console.error("Create Post Error:", errorMessage);
    }
};
