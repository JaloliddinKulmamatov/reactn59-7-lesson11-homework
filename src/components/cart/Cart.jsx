import React from "react";
import styles from "./Cart.module.scss"; 

const Cart = ({ cart, products }) => {
  const cartItems = products.filter((product) => cart.includes(product.id));

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image_url} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <strong>{item.price}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
