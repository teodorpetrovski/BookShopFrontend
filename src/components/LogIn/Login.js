import React from "react"
import {Link} from "react-router-dom";
const Login = () => {
  return(
      <div id="login">
          <h2>LogIn</h2>
          <form>
              <div className="form-group">
              <label for="email">Email</label>
              <input className="form-control" type="email" id="email" placeholder="Enter Email"/>
              </div>
              <div className="form-group">
              <label>Password</label>
              <input className="form-control" type="password" placeholder="Enter Password"/>
              </div>
              <Link className="button" to={"/books"}>Submit</Link>
          </form>
      </div>
  );
}

export default Login;