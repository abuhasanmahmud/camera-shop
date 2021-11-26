import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState();
  const [success, setSuccess] = useState(false);
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelAddAmin = (e) => {
    const user = { email };
    e.preventDefault();
    fetch("https://polar-lowlands-60910.herokuapp.com/users/admin", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setSuccess(result.modifiedCount);
        }
      });
  };
  return (
    <div>
      <h2>Make admin</h2>
      <form onSubmit={handelAddAmin}>
        <TextField
          className="mb-3"
          label="email"
          type="email"
          onBlur={handelEmail}
          variant="standard"
        />
        <br />
        <Button variant="contained" type="submit">
          Make admin
        </Button>
      </form>
      {success && (
        <Alert severity="success">Now this users role is addmin</Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
