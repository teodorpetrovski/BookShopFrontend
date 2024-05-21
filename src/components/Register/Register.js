import React from "react"
import {Link} from "react-router-dom";
const Register = () => {
    return(
        <div id="register">
            <h2>Register</h2>
            <form>
                <div className="form-group">
                <label for="firstName">First Name</label>
                <input class="form-control"  type="text" id="firstName" placeholder="Enter Fist Name"/>
                </div>
                <div className="form-group">
                <label for="lastName">Last Name</label>
                <input className="form-control"  type="text" id="lastName" placeholder="Enter Last Name"/>
                </div>
                <div className="form-group">
                <label for="email">Email</label>
                <input className="form-control"  type="email" id="email" placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                <label for="password">Password</label>
                <input className="form-control" type="password" id="password" placeholder="Enter Password"/>
                </div>
                <Link className="button" to={"/books"}>Submit</Link>
            </form>
        </div>
    );


}
export default Register;