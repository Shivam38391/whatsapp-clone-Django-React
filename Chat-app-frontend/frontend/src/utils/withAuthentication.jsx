import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";




const withAuthentication = (wrappedComponent) => {
    return function AuthComponent(props){
        const [isAuthenticated, setisAuthenticated] = useState(false)




        useEffect(() => {
  

            const token = document.cookie.split('; ').find(row => row.startsWith('token='));
            
            if (token){
                setisAuthenticated(true)
            }else{
                setisAuthenticated(false)
            }

        }, []);



        if (isAuthenticated) {
            return < wrappedComponent {...props} />
        }else{
            return <Navigate to='/login/'/>
        }
        
    };
};


export default withAuthentication