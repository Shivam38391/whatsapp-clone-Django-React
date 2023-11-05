import React, {useState} from "react";
import { TextField, Button } from "@mui/material";


function Login() {



    const [message, setmessage] = useState("")

    const [formData, setformData] = useState({
                                          "email": "",
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
            const response = await fetch( `${baseurl}login/` , options);
        
            const result = await response.json();
    
            console.log("Success:", result);
            console.log(result["email"][0]);
    
            setmessage(result["email"][0])
    
          } catch (error) {
            console.error("Error:", error);
          }
        }
        
        // const data = { username: "example" };
        postJSON();
        
    
    
      }




  return (
    <>
      <div>Login page</div>

      <div  className=" container text-center ">
        <h3 className="info"> {message} </h3>

        <TextField
          id="email"
          label="email"
          type="email"
          color="secondary"
          focused
          margin="normal"
          onChange={(e) => setformData({ ...formData, email: e.target.value })}
        />
        <br />
        <br />

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
          <Button
            onClick={handleFormSubmit}
            margin="normal"
            variant="contained"
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default Login;
