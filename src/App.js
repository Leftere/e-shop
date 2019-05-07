import React from 'react';
import Header from './components/Header/Header'
import Promo from './components/Promo/Promo'
import SimpleSlider from './components/Slider/Slider';
import './Layout/Layout.css';


function App() {
  return (
    <div className="App">
    <Promo />
    <Header /> 
    <main>
      <SimpleSlider />
      <div>catergories</div>
      <div>Slider</div>
      <div>Video</div>
      <div>Join Us</div>
      <footer>Footer</footer>
    </main>
    </div>
  );
}

export default App;
