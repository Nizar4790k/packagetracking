import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css";


const Login = () => {

    var attemps=0;

    const history = useHistory();

   const authenticate = () =>{

        if(attemps>=3){
            alert("You reached the maximum count of attemps");
            return;
        }    

        let regex = new RegExp("[A-Za-z0-9_]");

        
        const username= document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        console.log(regex.test(username));
        console.log(regex.test(password));

        if(!regex.test(username)){
            alert("The username can't contain special characters");
            attemps++;
            alert("Attemps to Log In remainings "+(3-attemps));
            return;
        }

        if(!regex.test(password)){
            alert("The password can't contain special characters");
            attemps++;
            alert("Attemps to Log In remainings "+(3-attemps));
            return;
           
        }

        axios.post("http://localhost:4000/login",{username,password})
        .then(response=>{

            if(response.data.success){
                history.push("/ItemList");
            }else{
                alert("User and password may be not correct");
                attemps++;
                alert("Attemps to Log In remainings"+(3-attemps));
            }


        });
    
    
    }


    return (


        <div className="wrapper">

            <div className="form-signin" >
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" id="username" className="form-control" name="username" placeholder="Username" required="" autoFocus="" maxLength="10" />
                <input type="password" id="password" className="form-control" name="password" placeholder="Password" required="" />
                
                
                <button className="btn btn-lg btn-primary btn-block" onClick={authenticate}  >Login</button>

            </div>


        </div>





    );



};



export default Login;