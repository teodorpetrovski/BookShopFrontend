import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bookShopRepository from "../../../repository/bookShopRepository";

const BookPage = (props) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(1);
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (props.book && props.book.bookId) {
            bookShopRepository.getReviewsByBook(props.book.bookId)
                .then(fetchedReviews => {
                    setReviews(fetchedReviews.data);
                })
                .catch(error => {
                    console.error("Error fetching reviews:", error);
                });
        } else {
            console.log("Book or Book ID is undefined");
        }
    }, [props.book]);

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const handleAddToCart = () => {
        props.onAddToCart(props.book.bookId, quantity);
        navigate("/books/addtocart");
    };

    const renderStars = (rating) => {
        return (
            <span>
                {Array.from({ length: rating }, (_, i) => (
                    <span key={i} className="text-warning h2">&#9733;</span>
                ))}
                {Array.from({ length: 5 - rating }, (_, i) => (
                    <span key={i} className="text-muted h2">&#9733;</span>
                ))}
            </span>
        );
    };

    const handleSubmitReview = (event) => {
        event.preventDefault();
        if (!rating || !description.trim()) {
            alert("Please provide both rating and description.");
            return;
        }
        bookShopRepository.addBookReview(props.book.bookId, rating, description)
            .then(() => {
                return bookShopRepository.getReviewsByBook(props.book.bookId);
            })
            .then(updatedReviews => {
                setReviews(updatedReviews);
                setRating(1);
                setDescription("");
            })
            .catch(error => {
                console.error("Error adding review:", error);
            });
    };
    const renderAverageRating = () => {
        if (!Array.isArray(reviews) || reviews.length === 0) return null;

        const totalRating = reviews.reduce((acc, cur) => acc + cur.rating, 0);
        const averageRating = totalRating / reviews.length;
        const roundedAverageRating = Math.round(averageRating);

        return roundedAverageRating;
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <img src={props.book.bookCover} alt={props.book.title} className="img-fluid" style={{ height: "500px", width: "300px" }} />
                </div>
                <div className="col-5">
                    <h1>{props.book.title}</h1>
                    <h3 className="text-muted">By {props.book.author}</h3>
                    <div className="mb-3">
                        {renderStars(renderAverageRating())}
                    </div>
                    <div className="mb-3">
                        <div>
                            <p className="text-warning h6 mb-3">Description:</p>
                            <p className="h6">
                                {props.book.description}
                            </p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <p className="text-danger h3"><b>Price: ${props.book.price}</b></p>
                    </div>
                    <button className="btn btn-warning btn-lg mb-3" onClick={handleAddToCart}>Add To Cart</button>
                    <div>
                        <label htmlFor="quantity" className="mr-2"><strong>Quantity:</strong></label>
                        <select id="quantity" name="quantity" className="custom-select w-auto d-inline-block"
                                value={quantity} onChange={handleQuantityChange}>
                            {[...Array(10).keys()].map(i => (
                                <option key={i} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>


                </div>
                <div className="col-2 border-start border-opacity-75 ps-5">
                    <div className="row mt-4">
                    <div className="col">
                            <h3 className="text-warning mb-3">Submit a Review</h3>
                            <form onSubmit={handleSubmitReview}>
                                <div className="mb-3">
                                    <label htmlFor="rating" className="form-label">Rating:</label>
                                    <select id="rating" name="rating" className="form-select" value={rating}
                                            onChange={(e) => setRating(parseInt(e.target.value))}>
                                        {[...Array(5).keys()].map(i => (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description:</label>
                                    <textarea id="description" name="description" className="form-control"
                                              value={description}
                                              onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                                <button type="submit" className="btn" style={{backgroundColor: '#8B6B2D', color: 'white'}}>Submit Review</button>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3 className="text-warning mb-3">Reviews</h3>
                            <div>
                                <div className="">
                                    {reviews.length > 0 ? reviews.map((review, index) => (
                                        <div key={index} className="mb-3">
                                            <div>{renderStars(review.rating)}</div>
                                            <p className=" h6 text-muted ms-2 mt-1">{review.reviewDescription}</p>
                                            <hr/>
                                        </div>
                                    )) : (
                                        <p className="card-text text-muted">No reviews yet.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default BookPage;
