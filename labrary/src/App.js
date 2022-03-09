
import React from "react";
import { Route, Routes } from "react-router-dom";
import Books from "./components/Book/index"
import Onebook from "./components/Book/Onebook";
import "./app.css"
import Home from "./pages/Home";



function App() {
  return (
    <>
    <Books />
    <Onebook />
    <Home />
    </>
  )
}

export default App;
