import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const NewUserForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = state;

    onSubmit({
      firstName,
      lastName,
    });

    setState({
      firstName: "",
      lastName: "",
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First name</Label>
        <Input
          required
          type="text"
          value={state.firstName}
          onChange={handleChange}
          name="firstName"
        />
      </FormGroup>
      <FormGroup>
        <Label>Last name</Label>
        <Input
          required
          type="text"
          value={state.lastName}
          onChange={handleChange}
          name="lastName"
        />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewUserForm;
