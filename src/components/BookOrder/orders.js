import React from "react";

function Orders(props) {
    return (
        <div className="container mt-5">
            <h1>My Orders</h1>
            {props.orders.map(order => (
                <div key={order.id} className="card mb-3 shadow-sm">
                    <div className="card-header">
                        <h2>Order #{order.id}</h2>
                        <p>Status: {order.status}</p>
                    </div>
                    <div className="card-body">
                        <h4>Order Items:</h4>
                        {order.orderItems.map(item => (
                            <div key={item.id} className="mb-3">
                                <div className="d-flex align-items-center">
                                    <img src={item.book.bookCover} alt={item.book.title} className="img-fluid" style={{ height: "100px", width: "60px", marginRight: "15px" }} />
                                    <div>
                                        <h5>{item.book.title}</h5>
                                        <p>Author: {item.book.author}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ${item.book.price}</p>
                                    </div>
                                </div>
                                <hr />

                            </div>
                        ))}
                        <div>
                            <h6>Total Price: ${order.totalPrice}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default Orders;
