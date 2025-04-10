// import React, { useState , useEffect} from "react";
// import './Cart.css'

// function Cart({cart, setCart}) {
//     const [price, setPrice] = useState(0);
//     useEffect(() => {
//       const totalPrice = cart.reduce((sum, product) => {
  
//         const priceString = product.price || "Rs.0"; 
//         const numericPrice = parseFloat(
//           priceString.replace(/[^\d-]/g,"") 
//         );
//         return sum + (isNaN(numericPrice) ? 0 : numericPrice * (product.quantity || 1)); 
//       }, 0);
    
//       setPrice(totalPrice);
//     }, [cart]);
    

//     const handleIncrement = (id) => {
//       const updatedCart = cart.map((product) =>
//         product.id === id
//           ? { ...product, quantity: (product.quantity || 1) + 1 }
//           : product
//       );
//       setCart(updatedCart);
//     };
    
//     const handleDecrement = (id) => {
//       const updatedCart = cart.map((product) =>
//         product.id === id
//           ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 }
//           : product
//       );
//       setCart(updatedCart);
//     };
    
    
    
//       const handleRemove = (id) => {
//         const updatedCart = cart.filter((product) => product.id !== id);
//         setCart(updatedCart);
//       };
    
//       return (
//         <>
//           <article>
//             {cart.map((product) => (
//               <div className="cart_box" key={product.id}>
//                 <div className="cart-img">
//                   <img src={product.image} alt={product.title} />
//                   <p>{product.title}</p>
//                 </div>
//                 <div>
//                   <button onClick={() => handleIncrement(product.id)}>+</button>
//                   <span>{product.quantity}</span>
//                   <button onClick={() => handleDecrement(product.id)}>-</button>
//                 </div>
//                 <div>
//                   <span>{product.price}</span>
//                   <button onClick={() => handleRemove(product.id)}>Remove</button>
//                 </div>
//               </div>
//             ))}
    
//             <div className="cart-total">
//               <span>Total Price of Your Cart:</span>
//               <span>Rs. {price}</span>
//             </div>
//           </article>
//         </>
//       );
// }
// export default Cart;



import React from "react";
import './Cart.css';

function Cart({ cart = [], setCart }) {
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleIncreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width="100" />
              <h3>{item.title}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;

