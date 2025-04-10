// import React from "react";
// import "./Card.css";
// // import { useState } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { addToCart } from "../store";



// function Card({cart,setCart}) {
//   const handleAddToCart = (product) => {
//     const existingProduct = cart.find((item) => item.id === product.id);

//     if (existingProduct) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: (item.quantity || 1) + 1 }
//             : item
//         )
//       );

//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//     console.log("Cart : ",product.quantity);
//   };




  

  
//   const products = [
//     {
//       id: 1,
//       title: "Pilates 14\" Touch Screen Laptop",
//       price: "Rs.52,099",
//       image: "https://static.wixstatic.com/media/c22c23_6dcb5abdf4904e1a9ca4a5d3234ead49~mv2.jpg",
//     },
//     {
//       id: 2,
//       title: "Corr Desktop 24GB Memory",
//       price: "Rs.82,099",
//       image: "https://static.wixstatic.com/media/c22c23_88af147a4da742eb86528c8d8e5594fd~mv2.jpg",
//     },
//     {
//       id: 3,
//       title: "MSP 14\" Laptop 16GB Memory",
//       price: "Rs.42,099",
//       image: "https://static.wixstatic.com/media/c22c23_01a8a61a9f6c4e3a97711b8c684050e9~mv2.png",
//     },
//     {
//       id: 4,
//       title: "Class LED 4K UHD Smart TV",
//       price: "Rs.78,099",
//       image: "https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg",
//     },
//     {
//       id: 5,
//       title: "Balo Headphones 700 Wireless",
//       price: "Rs.4,099",
//       image: "https://static.wixstatic.com/media/c22c23_65076c29d2de4910b9376408663514c2~mv2.png/v1/fill/w_374,h_374,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_65076c29d2de4910b9376408663514c2~mv2.png",
//     },
//     {
//       id: 6,
//       title: "Boat Wireless Earbud",
//       price: "Rs.2,099",
//       image: "https://static.wixstatic.com/media/c22c23_68efa76790cf48a7acdb518977ce72a1~mv2.png/v1/fill/w_374,h_374,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_68efa76790cf48a7acdb518977ce72a1~mv2.png",
//     },
//     {
//       id: 7,
//       title: "Smartphone Z Pixel Max 128GB",
//       price: "Rs.56,099",
//       image: "https://static.wixstatic.com/media/c22c23_299fed1f1efd4b4fa580ac49d00628dd~mv2.jpg/v1/fill/w_374,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_299fed1f1efd4b4fa580ac49d00628dd~mv2.jpg",
//     },
//     {
//       id: 8,
//       title: "CFitboot Fitness Tracker",
//       price: "Rs.8,099",
//       image: "https://static.wixstatic.com/media/c22c23_d898eb06de73454788ddf633d055e85b~mv2.jpg/v1/fill/w_374,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_d898eb06de73454788ddf633d055e85b~mv2.jpg",
//     },
//   ];



//   return (
//     <>
//     <div className="our-product">
//         <h1>Our Product</h1>
//       </div>
//       <div className="container">
//         {products.map((product) => (
//           <div className="card" key={product.id}>
//             <img className="card-img" src={product.image} alt={product.title} />
//             <h3 className="card-text">{product.title}</h3>
//             <h3 style={{ marginLeft: "10px", color: "green" }}>{product.price}</h3>
//             <button className="buy">Buy Now</button>
//             <button onClick={()=>handleAddToCart(product)} className="add-cart-btn">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//       </>
//   );
// }

// export default Card;




import React,{useState} from "react";
import "./Card.css";
import Cart from "./Cart";

function Card({cart ,  setCart}) {

  const products = [
    {
      id: 1,
      title: "Pilates 14\" Touch Screen Laptop",
      price: "Rs.52,099",
      image: "https://static.wixstatic.com/media/c22c23_6dcb5abdf4904e1a9ca4a5d3234ead49~mv2.jpg",
    },
    {
      id: 2,
      title: "Corr Desktop 24GB Memory",
      price: "Rs.82,099",
      image: "https://static.wixstatic.com/media/c22c23_88af147a4da742eb86528c8d8e5594fd~mv2.jpg",
    },
    {
      id: 3,
      title: "MSP 14\" Laptop 16GB Memory",
      price: "Rs.42,099",
      image: "https://static.wixstatic.com/media/c22c23_01a8a61a9f6c4e3a97711b8c684050e9~mv2.png",
    },
    {
      id: 4,
      title: "Class LED 4K UHD Smart TV",
      price: "Rs.78,099",
      image: "https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg",
    },
    {
      id: 5,
      title: "Balo Headphones 700 Wireless",
      price: "Rs.4,099",
      image: "https://static.wixstatic.com/media/c22c23_65076c29d2de4910b9376408663514c2~mv2.png/v1/fill/w_374,h_374,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_65076c29d2de4910b9376408663514c2~mv2.png",
    },
    {
      id: 6,
      title: "Boat Wireless Earbud",
      price: "Rs.2,099",
      image: "https://static.wixstatic.com/media/c22c23_68efa76790cf48a7acdb518977ce72a1~mv2.png/v1/fill/w_374,h_374,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_68efa76790cf48a7acdb518977ce72a1~mv2.png",
    },
    {
      id: 7,
      title: "Smartphone Z Pixel Max 128GB",
      price: "Rs.56,099",
      image: "https://static.wixstatic.com/media/c22c23_299fed1f1efd4b4fa580ac49d00628dd~mv2.jpg/v1/fill/w_374,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_299fed1f1efd4b4fa580ac49d00628dd~mv2.jpg",
    },
    {
      id: 8,
      title: "CFitboot Fitness Tracker",
      price: "Rs.8,099",
      image: "https://static.wixstatic.com/media/c22c23_d898eb06de73454788ddf633d055e85b~mv2.jpg/v1/fill/w_374,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_d898eb06de73454788ddf633d055e85b~mv2.jpg",
    },
  ];
  const handleClick = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart=(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      setCart=([...cart, { ...product, quantity: 1 }]);
    }
    
  };

  return (
    <>
      <div className="our-product">
        <h1>Our Products</h1>
      </div>
      <div className="container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img className="card-img" src={product.image} alt={product.title} />
            <h3 className="card-text">{product.title}</h3>
            <h3 style={{ marginLeft: "10px", color: "green" }}>{product.price}</h3>
            <button className="buy">Buy Now</button>
            <button onClick={() => handleClick(product)} className="add-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;