import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css";


const Login = () => {

    const history = useHistory();

   const authenticate = () =>{

        const username= document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        axios.post("http://localhost:4000/login",{username,password})
        .then(response=>{

            if(response.data.success){
                history.push("/ItemList");
            }else{
                alert("User and password may be not correct");
            }

        });
    
    
    }


    return (


        <div className="wrapper">

            <div className="form-signin" >
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" id="username" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" />
                <input type="password" id="password" className="form-control" name="password" placeholder="Password" required="" />
                <button className="btn btn-lg btn-primary btn-block" onClick={authenticate}  >Login</button>

            </div>


        </div>





    );



};



export default Login;