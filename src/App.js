import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import About, { Settings } from './about';
import {Profile} from './about'; // Ensure Profile is correctly imported
import './App.css'
import Products from './Products';

function Header() {
  
  return (
    
    <>
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Home</Link>
    <Link class="navbar-brand" to="Products" >Products</Link>
    <Link class ="navbar-brand" to="about">About</Link>
    <Link className='navbar-brand' to="help">Help</Link>
    <form class="d-flex">
      <input class="form-control me-2" style={{color:"black"}}type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  );
}
function Help(){
  return(
    <><h2>this is help component</h2></>
  )
}

function Error(){
  return(
    <>
    <h3>this error page</h3>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<Products/>}/>
        <Route path="help" element={<Help/>}/>
        <Route path="about" element={<About />}>
          <Route path="profile" element={<Profile />} />
          <Route path='settings' element={<Settings/>}/>
        </Route>
      
      <Route path='*' element ={<Error/>}/>
      </Routes>
    </BrowserRouter>)}
    export default App