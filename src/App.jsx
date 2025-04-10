// import { useState } from 'react'
// import React from 'react'
// import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
// import './App.css'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
// import Card from './Components/Card'
// import End from './Components/End'
// import Cart from './Components/Cart'
// import ContactUs from './Components/ContactUs';
// import About from './Components/AboutUs';
// import Services from './Components/Services';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
// import Home from './Components/Home';
// import { Provider } from "react-redux";
// import { store } from "./store";
// import CartPage from "./Components/Cart";
// function App() {

// const [cart , setCart]= useState([]);
// const [warning , setWarning] = useState(false);

//   // const handleClick=(product)=>{
//   //   console.log(product);
//   //   let isPresent = false;
//   //   cart.forEach((item)=>{
//   //     if(product.id===item.id){
//   //       isPresent=true;
//   //     }
//   //   })
//   //   if(isPresent)
//   //     setWarning(true);
//   //   setTimeout(()=>{
//   //     setWarning(false)
//   //   },4000)
    
//   //     setCart([...cart,product]);
//   //   };
  

//   return (
//     <>
    
//  <BrowserRouter>

//       {/* Navbar */}
//       <Navbar size={cart.length}/>
//       <Link to="/Cart">Cart ({cart.length})</Link>
//       {/* Routes */}
    
//       <Routes>
        
//         <Route path="/" element={<Card cart={cart} setCart={setCart}/>} />
//         <Route path="/ContactUs" element={<ContactUs />} />
//         <Route path="/Home" element={<Home />} />
//         <Route path='/Card' element={<Card cart={cart} setCart={setCart}/>}/>
//         <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
//         <Route path="/AboutUs" element={<About />}/>
//         <Route path="/Services" element={<Services />}/>
//         <Route path="/Login" element={<Login />}/>
//         <Route path="/SignUp" element={<SignUp />}/>

//       </Routes>
//       <End />
//       {/* Warning Alert */}
//       {warning && alert("This item is already added to cart")}
//     </BrowserRouter>
//     </>
//   )
// }

// export default App













import { useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

import Card from "./Components/Card";

import Cart from "./Components/Cart";
import ContactUs from "./Components/ContactUs";
import About from "./Components/AboutUs";
import Services from "./Components/Services";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";

function App() {
  const [cart, setCart] = useState([]);
  // const [warning, setWarning] = useState(false);

  // const handleClick = (product) => {
  //   let isPresent = false;
  //   cart.forEach((item) => {
  //     if (product.id === item.id) {
  //       isPresent = true;
  //     }
  //   });
  //   if (isPresent) {
  //     setWarning(true);
  //     setTimeout(() => {
  //       setWarning(false);
  //     }, 4000);
  //     return;
  //   }
  //   setCart([...cart, { ...product, quantity: 1 }]);
  // };

  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar size={cart.length} />

      {/* Warning Alert */}
      {/* {warning && (
        <div className="warning-alert">
          This item is already added to the cart!
        </div> */}
      {/* )} */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Card"
          element={<Card cart={cart} setCart={setCart} />}
        />
        <Route
          path="/Cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      {/* Footer */}
    </BrowserRouter>
  );
}

export default App;