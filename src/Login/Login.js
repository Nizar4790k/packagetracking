import "./Login.css";


const Login = () => {




    return (


        <div className="wrapper">

            <div className="form-signin" >
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" id="username" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" />
                <input type="password" id="password" className="form-control" name="password" placeholder="Password" required="" />
                
                <button className="btn btn-lg btn-primary btn-block"  >Login</button>

            </div>


        </div>





    );

};



export default Login;