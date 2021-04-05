/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import {
  createUserRequest,
  deleteUserRequest,
  getUsersRequest,
  userError,
} from "../actions/users";
import UserList from "./Users";
import NewUserForm from "./NewUserForm";

function App({ getUsers, createUser, deleteUser, users, error, setError }) {
  const handleSubmit = (data) => {
    createUser(data);
  };

  const handleDelete = (userId) => {
    deleteUser(userId);
  };

  const handleCloseAlert = () => {
    setError("");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "20px",
        maxWidth: "600px",
        minWidth: "300px",
      }}
    >
      <Alert color="danger" isOpen={!!error} toggle={handleCloseAlert}>
        {error}
      </Alert>
      <NewUserForm onSubmit={handleSubmit} />
      <UserList users={users} onDelete={handleDelete} />
    </div>
  );
}

const mapstate2Props = ({ users: { users, error } }) => ({
  users,
  error,
});

const mapDispatch2Props = {
  getUsers: getUsersRequest,
  createUser: createUserRequest,
  deleteUser: deleteUserRequest,
  setError: userError,
};

export default connect(mapstate2Props, mapDispatch2Props)(App);
