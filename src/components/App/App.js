import logo from '../../logo.svg';
import './App.css';
import {Component} from "react";
import {BrowserRouter as Router, Navigate} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Header from "../Header/header";
import BookList from "../Book/BookList/BookList";
import bookShopRepository from "../../repository/bookShopRepository";
import BookAdd from "../Book/BookCreate/BookCreate";
import BookEdit from "../Book/BookEdit/BookEdit";
import BookPage from "../Book/BookDetails/BookDetails";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        books: [],
        selectedBook: {},
        cities: [],
        categories:[]


    }
  }

  render() {
    return (
        <Router>
          <Header/>

          <main>
            <div className={"container"}>

              <Routes>

                  <Route path={"/books"} exact
                         element={<BookList  books={this.state.books} categories={this.state.categories} cities={this.state.cities} onOpenDetails={this.getBook} onSearch={this.loadBooks}  onEdit={this.getBook} onDelete={this.DeleteBook} onAddToCart={this.getBook}/>}/>
                  <Route path={"/books/add"} exact element={<BookAdd onBookAdd={this.BookAdd} categories={this.state.categories} cities={this.state.cities} />}/>
                  <Route path={"/books/edit/:id"} exact
                         element={<BookEdit  book={this.state.selectedBook} onBookEdit={this.EditBook} categories={this.state.categories} cities={this.state.cities}/>}/>
                  <Route path={"/books/details/:id"} exact
                         element={<BookPage  book={this.state.selectedBook} />}/>

              </Routes>

            </div>
          </main>
        </Router>

    );
  }
    loadBooks = (categoryId, price, cityId, title, author) => {
        bookShopRepository.fetchBooks(categoryId, price, cityId, title, author)
            .then((data) => {
                    this.setState({
                        books: data.data
                    })
                }
            )
    }
    loadCategories = () =>
    {
        bookShopRepository.fetchCategories()
            .then((data) => {
                    this.setState({
                        categories: data.data
                    })
                }
            )
    }
    loadCities = () =>
    {
        bookShopRepository.fetchCities()
            .then((data) => {
                    this.setState({
                        cities: data.data
                    })
                }
            )
    }
    getBook = (id) =>
    {
        bookShopRepository.getBook(id)
            .then((data) => {
                    this.setState({
                        selectedBook: data.data
                    })
                }
            )
    }

    BookAdd = (title,author,description,price,categories,bookCities,bookCover) =>
    {
        bookShopRepository.addBook(title,author,description,price,categories,bookCities,bookCover)
            .then(() => {
                this.loadBooks();
            })
    }

    EditBook = (id,title,author,description,price,categories,bookCities,bookCover) =>
    {
        bookShopRepository.editBook(id,title,author,description,price,categories,bookCities,bookCover)
            .then(() => {
                this.loadBooks();
            })
    }

    DeleteBook = (id) =>
    {
        bookShopRepository.deleteBook(id)
            .then(() => {
        this.loadBooks();
    })
    }










  componentDidMount(){
      this.loadBooks();
      this.loadCategories();
      this.loadCities();

  }


}


export default App;
