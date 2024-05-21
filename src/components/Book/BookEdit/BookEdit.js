import {useNavigate} from "react-router-dom";
import React from "react";

const BookEdit= (props) => {
    const navigate=useNavigate();

    const [formData,updateFormData]=React.useState({
        title:"",author:"",description:"",price:"",categories:[],bookCities:[],bookCover:""

    })

    const handleChange = (e) =>
    {
        updateFormData({...formData,
            [e.target.name]:e.target.value.trim()
        })
    }
    const handleCategoriesChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions);
        updateFormData({
            ...formData,
            categories: selectedOptions.map(option => option.value)
        });
    }
    const handleCitiesChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions);
        updateFormData({
            ...formData,
            bookCities: selectedOptions.map(option => option.value)
        });
    }

    const onFormSubmit = (e) =>
    {
        e.preventDefault();
        const title=formData.title !== "" ? formData.title : props.book.title;
        const author=formData.author !== "" ? formData.author : props.book.author;
        const description=formData.description !== "" ? formData.description : props.book.description;
        const price=formData.price !== "" ? formData.price : props.book.price;
        const categories=formData.categories.length > 0 ? formData.categories : props.book.categories.map(category => category.categoryId);
        const bookCities=formData.bookCities.length >0 ? formData.bookCities : props.book.bookCities.map(city => city.locationId);
        const bookCover = formData.bookCover !== "" ? formData.bookCover : props.book.bookCover;


        props.onBookEdit(props.book.bookId,title,author,description,price,categories,bookCities,bookCover);
        navigate("/books");
    }

    return(
        <div id="bookEdit" >
            <h2>Edit Book</h2>
            <div>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Book Title</label>
                        <input type="text"
                               className="form-control"
                               id="title"
                               name="title"
                               placeholder={props.book.title}
                               onChange={handleChange}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text"
                               className="form-control"
                               id="author"
                               name="author"
                               placeholder={props.book.author}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bookCover">Book Cover:</label>
                        <input type="text"
                               className="form-control"
                               id="bookCover"
                               name="bookCover"
                               placeholder={props.book.bookCover}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text"
                               className="form-control"
                               id="description"
                               name="description"
                               placeholder={props.book.description}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text"
                               className="form-control"
                               id="price"
                               name="price"
                               placeholder={props.book.price}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="categories">Categories:</label>
                        <select multiple={true}
                                className="form-control"
                                id="categories"
                                name="categories"
                                value={formData.categories}
                                onChange={handleCategoriesChange}>
                            {props.categories?.map((category) => (
                                <option key={category.categoryId} value={category.categoryId}>{category.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="bookCities">Cities:</label>
                        <select multiple={true}
                                className="form-control"
                                id="bookCities"
                                name="bookCities"
                                value={formData.bookCities}
                                onChange={handleCitiesChange}>
                            {props.cities?.map((city) => (
                                <option key={city.locationId} value={city.locationId}>{city.name}</option>
                            ))}
                        </select>
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>


    )
}

export default BookEdit;