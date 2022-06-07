import React from "react";
import "./App.css";

import Header from "./components/Header/Index";
import Footer from "./components/footer/Index";
import Cards from "./components/cards/Index";
import HomePage from "./components/home page/Index";
const App  = () =>{
  return(
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}
export default App;