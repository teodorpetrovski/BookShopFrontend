import logo from '../../logo.svg';
import './App.css';
import {Component} from "react";
import {BrowserRouter as Router, Navigate} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Header from "../Header/header";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }

  render() {
    return (
        <Router>
          <Header/>

          <main>
            <div className={"container"}>

              <Routes>


              </Routes>

            </div>
          </main>
        </Router>

    );
  }











  componentDidMount(){

  }


}


export default App;
