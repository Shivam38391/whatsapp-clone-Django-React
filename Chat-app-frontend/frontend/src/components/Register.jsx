import React from "react";
import { TextField, Button } from "@mui/material";

function Register() {
  return (
    <>
      <div className=" container text-center">
        <TextField
          id="email"
          label="email"
          type="email"
          color="secondary"
          focused
          margin="normal"
        />
        <br />
        <TextField
          id="first_name"
          label="first_name"
          type="text"
          color="secondary"
          focused
          margin="normal"
        />
        <br />
        <TextField
          id="last_name"
          label="last_name"
          type="text"
          color="secondary"
          focused
          margin="normal"
        />
        <br />
        <TextField
          id="password"
          label="password"
          type="password"
          color="secondary"
          focused
          margin="normal"
        />

        <div className="d-flex justify-content-center">
          <Button margin="normal" variant="outlined">
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default Register;
