import "./Login.css";


const Login = () => {




    return (


        <div className="wrapper">

            <div className="form-signin" >
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" id="username" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" />
                <input type="password" id="password" className="form-control" name="password" placeholder="Password" required="" />
                
                <button className="btn btn-lg btn-primary btn-block" onClick={authenticate} >Login</button>

            </div>


        </div>





    );

};

function authenticate(){
    var data = {
        method:'post',
        headers:{'Content-Type':'application/json',
        mode:'no-cors'},
        body:JSON.stringify({username:"jsanchez",password:"123456"})};

                    
    fetch("https://courierdemo.azurewebsites.net/api/membership/login",data)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));


}

export default Login;