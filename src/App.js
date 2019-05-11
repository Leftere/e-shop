import React from 'react';
import Header from './components/Header/Header'
import Promo from './components/Promo/Promo'
import Slider from './components/Slider/Slider';
import Categories from './components/Categories/Categories';

import './Layout/Layout.css';


function App() {
  return (
    <div className="App">
    <Promo />
    <Header /> 
    <main>
    <Slider />  
      <div>Video</div>
      <div>Join Us</div>
      <footer>Footer</footer>
    </main>
    </div>
  );
}

export default App;
