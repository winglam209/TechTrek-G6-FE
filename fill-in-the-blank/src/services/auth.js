import axios from 'axios';

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export { addUserToLocalStorage, removeUserFromLocalStorage };
