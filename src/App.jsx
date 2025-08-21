// src/App.jsx
import React from "react";
import Header from "./comp/Header";
import Slider from "./comp/Slider";
import Contents from "./comp/Contents";
import Footer from "./comp/Footer";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Slider />
      <Contents />
      <Footer />
    </>
  );
}

export default App;
