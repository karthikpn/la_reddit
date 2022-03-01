import axios from "axios";

export const userLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/user", { email, password }, config);
    console.log(data);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
