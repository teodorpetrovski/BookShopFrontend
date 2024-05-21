import React from "react";
import {Link} from "react-router-dom";
const footer = (props) =>
{
    return (<footer>
        <div>
            <div>
                <p>
                    <i>BookShop</i>
                </p>
                </div>
            <div>
                <ul>
                    <li>
                        <Link className="nav-link" to={"/books"}>Book Store</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to={"/orders"}>My Orders</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to={"/books/addtocart/"}>Shopping Cart</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    </footer>);

}
export default footer;