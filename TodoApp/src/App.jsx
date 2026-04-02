import React, { Component } from 'react'
import Todoapp from "./components/Todoapp/Todoapp";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact element={<Todoapp />} />

          <Route path="/about" element={<About />} />
        </Routes>

      </Router>
    )
  }
}