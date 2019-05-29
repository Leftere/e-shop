import React, { Component } from "react";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Slider from "./components/Slider/Slider";
import Video from "./components/Video/Video";
// import JoinUs from './components/JoinUs/JoinUs';
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

import "./Layout/Layout.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Promo />
        <Header />
        <main>
          <Slider />
          <Video />
          {/*JoinUs />*/}
          <Newsletter />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
