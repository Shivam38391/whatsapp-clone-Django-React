import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";




function Register() {


  const [formData, setformData] = useState({
                                        "email": "",
                                        "firstName": "",
                                        "lastName": "",
                                        "password": "",
                                      })


  const handleFormSubmit = () => {

    const baseurl = "http://127.0.0.1:8000/";


    async function postJSON() {

      const options = {

        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( formData ),
      }

      try {
        const response = await fetch( `${baseurl}register/` , options);
    
        const result = await response.json();

        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    
    // const data = { username: "example" };
    postJSON();
    


  }




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
          onChange={ e => setformData( {...formData , email: e.target.value} ) }
        />
        <br />
        <TextField
          id="first_name"
          label="first_name"
          type="text"
          color="secondary"
          focused
          margin="normal"
          onChange={ e => setformData( {...formData , first_name: e.target.value} ) }
        />
        <br />
        <TextField
          id="last_name"
          label="last_name"
          type="text"
          color="secondary"
          focused
          margin="normal"

          onChange={ e => setformData( {...formData , last_name: e.target.value} ) }

        />
        <br />
        <TextField
          id="password"
          label="password"
          type="password"
          color="secondary"
          focused
          margin="normal"
          onChange={ e => setformData( {...formData , password: e.target.value} ) }
        />

        <div className="d-flex justify-content-center">
          <Button onClick={ handleFormSubmit }  margin="normal" variant="outlined">
            Register
          </Button>
        </div>
      </div>
    </>
  );
}

export default Register;
