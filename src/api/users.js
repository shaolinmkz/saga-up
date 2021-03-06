import axios from "axios";

export const getUsers = () => {
  return axios.get("/users", {
    params: {
      limit: 1000,
    },
  });
};

export const createUser = (payload) => {
  return axios.post("/users", payload);
};

export const deleteUser = (userId) => {
  return axios.delete(`/users/${userId}`);
};
