import { tokenAPI } from "./routes";

export const loginAPI = async (username, password) => {
  const payload = JSON.stringify({ username, password })
  try {
    let response = await tokenAPI.post("/login/", payload)
    console.log(response)
    if (response.status === 200) {
      console.log(response.data.accessToken)
      return response.data.accessToken;
      // setAuthToken(response.data.accessToken)
      // setUser(jwt_decode(response.data.accessToken))
      // localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken))
      // navigate("/")
    }
  } catch {
    alert("Wrong password/user combination")
    return false
  }
}


const addUserToLocalStorage = (token) => {
// const addUserToLocalStorage = ({ user, token }) => {
  // localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export { addUserToLocalStorage, removeUserFromLocalStorage };
