import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import "../pages/CSS/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [size, setSize] = useState(0);


  useEffect(() => {
    fetch(
      "https://doggystickers.vercel.app/_next/data/xyaZmLIU1DsdFtyNNRye4/index.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.pageProps.products.find(
          (item) => item.node.id === id
        );
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="productDetail">
      <h1>{product.node.title}</h1>
      <img
        src={product.node.images.edges[0].node.originalSrc}
        alt={product.node.title}
      />
      <p>{product.node.description}</p>
      <div className="price">${product.node.variants.edges[size].node.price}</div>
      <div>
        <select
          name="productVariants"
          id="productVariants"
          onChange={(e) => {
            setSize(e.target.value);
          }}
        >
          {product.node.variants.edges.map((variant, index) => (
            <option key={index} value={index}>
              {variant.node.title}
            </option>
          ))}
        </select>
      </div>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
