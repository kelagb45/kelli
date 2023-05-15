
import './App.css';
import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import about from './components/About/about'
import Experience from './components/experience/experience'
import services from './components/Services/services'
import portfolio from'./components/Portfolio/portfolio'
import Testimonial from './components/Testimonal/testimonial'
import contact from './components/Contact/contact'
import footer from './components/Footer/footer'


function App() {
  return (
    <div>
    <header />
    <navbar />
    <about />
    <Experience />
    <services />
    <portfolio />
    <Testimonial />
    <contact />
    <footer />
  </div>
  );
}

export default App;
