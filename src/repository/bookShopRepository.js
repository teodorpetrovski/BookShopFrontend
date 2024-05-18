import axios from '../axios/axios';

const BookShopRepository = {

    fetchBooks: (categoryId, price, cityId, title, author) =>
    {
        return axios.get("/books",{params:{
                categoryId:categoryId, price:price, cityId:cityId, title:title, author:author
            }})
    },

    addBook: (title,author,description,price,categories,bookCities,bookCover) => {
        return axios.post("/books/add", {
            title:title,author:author,description:description,price:price,categories:categories,bookCities:bookCities,bookCover:bookCover
        })
    },
    editBook: (id,title,author,description,price,categories,bookCities,bookCover) => {
        return axios.post(`/books/edit/${id}`, {
            title:title,author:author,description:description,price:price,categories:categories,bookCities:bookCities,bookCover:bookCover
        })
    },
    deleteBook:(id) =>{
        return axios.post(`/books/delete/${id}`)
    },
    getBook:(id) => {
        return axios.get(`/books/${id}`)
    },
    addReview:(id,user, bookId, rating,reviewDescription) =>{
        return axios.post(`/books/${id}/addReview`,{
            user:user, bookId:bookId, rating:rating,reviewDescription:reviewDescription
        })
    },
    confirmOrder:() =>
    {
        return axios.post("/bookorder/confirmation")
    },
    fetchOrders : () => {
        return axios.get("/bookorder")
    },
    updateOrderStatus: (id,status ) =>{
        return axios.post(`/bookorder/${id}/updateStatus`,{status:status})
    },
    fetchCategories: () =>
    {
        return axios.get("/books/categories")
    },
    fetchCities: () =>
    {
        return axios.get("/books/cities")
    }






}

export default BookShopRepository;