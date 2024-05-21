import {useNavigate} from "react-router-dom";
import React from "react";

const BookAdd= (props) => {
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
        const title=formData.title;
        const author=formData.author;
        const description=formData.description;
        const price=formData.price;
        const categories=formData.categories;
        const bookCities=formData.bookCities;
        const bookCover = formData.bookCover;


        props.onBookAdd(title,author,description,price,categories,bookCities,bookCover);
        navigate("/books");
    }

    return(
        <div id="bookAdd">
            <h2>Add Book</h2>
            <div>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Book Title</label>
                        <input type="text"
                               className="form-control"
                               id="title"
                               name="title"
                               required
                               placeholder="Enter Title of Book"
                               onChange={handleChange}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text"
                               className="form-control"
                               id="author"
                               name="author"
                               placeholder="Enter book's author"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bookCover">Book Cover:</label>
                        <input type="text"
                               className="form-control"
                               id="bookCover"
                               name="bookCover"
                               placeholder="Enter link of cover image"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text"
                               className="form-control"
                               id="description"
                               name="description"
                               placeholder="Enter book description"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text"
                               className="form-control"
                               id="price"
                               name="price"
                               placeholder="Enter book price"
                               required
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

export default BookAdd;