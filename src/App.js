import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Movies from './Components/Movies';
import Notfound from './Components/Notfound'
import Actor from './Components/Actor'
import { GlobalStyle } from "./GlobalStyle"

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/movie-catalogue' element={<Home />}/>
        <Route path='/:movieId' element={<Movies />}/>
        <Route path='/*' element={<Notfound />}/>
        <Route path='/:actorId' element={<Actor />}/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
