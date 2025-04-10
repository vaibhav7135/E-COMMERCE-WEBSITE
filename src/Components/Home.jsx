import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import End from "./End";

function Home({ cart, setCart, handleClick }) {
  return (
    <>
    <Footer />
      <Card cart={cart} setCart={setCart} handleClick={handleClick} />
      <End />
    </>
  );
}

export default Home;