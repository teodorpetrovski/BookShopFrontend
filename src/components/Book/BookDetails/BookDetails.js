import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const BookPage = (props) => {

    const navigate = useNavigate();
    const [quantity,setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));

    };
    const handleAddToCart = () => {
      props.onAddToCart(props.book.bookId,quantity);
      navigate("/books/addtocart")
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <img src={props.book.bookCover} alt={props.book.title} className="img-fluid" style={{height:"500px",width:"300px"}} />

                </div>
                <div className="col-5">
                    <h1>{props.book.title}</h1>
                    <h3 className="text-muted">By {props.book.author}</h3>
                    <div className="mb-3">
                        {Array.from({ length: 2 }, (_, i) => (
                            <span key={i} className="text-warning h1">&#9733;</span>
                        ))}
                        {Array.from({ length: 5 - 3 }, (_, i) => (
                            <span key={i} className="text-muted h1">&#9733;</span>
                        ))}
                    </div>
                </div>
                    <div className="col-2 border-start border-opacity-75 ps-5">
                    <div className="mb-3">
                        <p className="text-danger h1">${props.book.price}</p>
                    </div>
                    <button className="btn btn-warning btn-lg mb-3" onClick={handleAddToCart} >Add To Cart</button>
                    <div>
                        <label htmlFor="quantity" className="mr-2"><strong>Quantity:</strong></label>

                        <select id="quantity" name="quantity" className="custom-select w-auto d-inline-block" value={quantity} onChange={handleQuantityChange}>
                            {[...Array(10).keys()].map(i => (
                                <option key={i} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        {/*{console.log(quantity)}*/}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookPage;