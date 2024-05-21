import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import shoppingCart from "../../Cart/ShoppingCart";
import {ShoppingCart} from "phosphor-react";



function BookList(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [filter, setFilter] = useState({
        categoryId:'', price:'', cityId:'', title:'', author:''
    });


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate=useNavigate();
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };



    const onFormSubmit = (e) =>
    {
        e.preventDefault();
        const categoryId=filter.categoryId;
        const price=filter.price;
        const cityId=filter.cityId;
        const title=filter.title;
        const author=filter.author;


        props.onSearch(categoryId, price, cityId, title, author);
        navigate("/books");
    }






    return (
        <div className="container">
            <div className="row pt-2">
                <div className="col-3 border-end">
                    <form onSubmit={onFormSubmit}>
                        <h5 className="filterHeader">Filter books:</h5>
                        <div className="form-group mb-2">
                            <label htmlFor="title" className="control-label">Filter by title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="form-control"
                                placeholder="Enter Title"
                                value={filter.title}
                                onChange={handleFilterChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="price" className="control-label">Filter by Price</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="form-control"
                                placeholder="Filter by Price"
                                value={filter.price}
                                onChange={handleFilterChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="author" className="control-label">Filter by Author</label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                className="form-control"
                                placeholder="Enter Author"
                                value={filter.author}
                                onChange={handleFilterChange}
                            />
                        </div>

                        <div className="form-group mb-2" >
                            <label htmlFor="categories">Filter by Categories:</label>
                            <select multiple={true}
                                    className="form-control"
                                    id="categories"
                                    name="categoryId"
                                    value={filter.categoryId}
                                    onChange={handleFilterChange}>
                                {props.categories?.map((category) => (
                                    <option key={category.categoryId} value={category.categoryId}>{category.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="bookCities">Filter by Cities:</label>
                            <select multiple={true}
                                    className="form-control"
                                    id="bookCities"
                                    name="cityId"
                                    value={filter.cityId}
                                    onChange={handleFilterChange}>
                                {props.cities?.map((city) => (
                                    <option key={city.locationId} value={city.locationId}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group pt-2 ">
                            <input type="submit" value="Filter" className="btn filterBtn"/>
                        </div>
                    </form>
                    <div className="pt-2">
                        <Link className="btn btn-block addToCartBtn" to="/books/add">Add New Book</Link>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        {props.books.map((item) => (
                            <div key={item.bookId} className="col cardDiv mb-3">
                                <Link
                                    onClick={() => props.onOpenDetails(item.bookId)} to={`/books/details/${item.bookId}`}
                                    style={{ textDecoration: "none" }}
                                >
                                <div className="card booklist rounded-1" style={{ width: '200px', height: '300px' }}>

                                    <img
                                        className="card-img-top rounded-0"
                                        src={item.bookCover}
                                        style={{ height: '500px' }}
                                        alt="Image for product!"
                                    />
                                    <div className="card-body">
                                        <h4 className="card-text">{item.title}</h4>
                                    </div>

                                    <div className="card-footer">

                                        <Link className="btn editBtn ms-1" onClick={() => props.onEdit(item.bookId)}
                                              to={`/books/edit/${item.bookId}`}>Edit</Link>
                                        <Link className="btn deleteBtn ms-1"
                                              onClick={() => props.onDelete(item.bookId)}>Delete</Link>
                                        <Link className="btn addToCart ms-1"
                                              onClick={() => props.onAddToCart(item.bookId,1)} to={"/books/addtocart"}><ShoppingCart
                                            size={25}/></Link>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BookList;