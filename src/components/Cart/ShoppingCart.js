import React from "react";
import {Link} from "react-router-dom";

function ShoppingCart(props) {
    return (
        <div>

                <h2>Shopping Cart</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.carts.cartItems && props.carts.cartItems.map(item => (
                        <tr>
                            <td><img src={item.book.bookCover} width="200px" height="250px"/></td>
                            <td>{item.book.title}</td>
                            <td>{item.book.author}</td>
                            <td>{item.book.description}</td>
                            <td>{item.book.price}</td>
                            <td><button className="btn btn-danger" onClick={() => props.onRemoveFromCart(item.book.bookId)}>Remove</button></td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td><button className="btn btn-danger" onClick={()=>props.onClearCart()}>Clear cart</button></td>
                        <td>Total Price: {props.carts.totalPrice} $</td>
                    </tr>
                    </tfoot>
                </table>

            <div className="row  mt-4">
                <div className="col-2 ms-auto">
                    <Link className={"btn btn-success ms-2"}  to={`/payment`}>Order Now</Link>
                </div>
            </div>




        </div>);
}

export default ShoppingCart;
