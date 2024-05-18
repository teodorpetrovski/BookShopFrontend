import React from "react";
import {Link} from "react-router-dom";

const header = (props) =>
{



    const loggedInUser = null;

    return (

        <header>

            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/books">Book Store</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/books"}>Books</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/shoppingcart"}>Shopping Cart</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/orders"}>My Orders</Link>
                            </li>
                        </ul>


                        <ul className="navbar-nav ms-auto"> {/* Right-aligned links */}
                            {loggedInUser === null ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/account/login"}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/account/register"}>Register</Link>
                                    </li>
                                </>) : (

                                <li className="nav-item text-light">
                                    Welcome User
                                </li>

                            )}
                        </ul>

                    </div>
                </div>
            </nav>

            <div
                style={{
                    backgroundImage: `url('https://c1.wallpaperflare.com/preview/127/366/443/library-book-bookshelf-read.jpg')`, // Replace with the actual path to your image
                    backgroundPosition: 'center bottom -100px',
                    backgroundSize: 'cover',
                    height: '40vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                }}
            ></div>

        </header>

    );
}

export  default header;