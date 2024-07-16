import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const groupedCart = cart.reduce((acc, product) => {
    const productId = product.node.id;
    if (!acc[productId]) {
      acc[productId] = { ...product, count: 0 };
    }
    acc[productId].count += 1;
    return acc;
  }, {});

  const groupedProducts = Object.values(groupedCart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {groupedProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {groupedProducts.map((product, index) => (
            <li key={index}>
              <span>{product.node.title}</span>
              <span>${product.node.variants.edges[0]?.node.price}</span>
              <span>Count: {product.count}</span>
              {product.node.images.edges.length > 0 && (
                <img
                  src={product.node.images.edges[0]?.node.originalSrc}
                  alt={product.node.title}
                  width="200"
                  height="200"
                />
              )}
              <button onClick={() => removeFromCart(product.node.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
