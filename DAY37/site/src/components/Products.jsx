import React from 'react';
import { products } from '../data';

function Products() {
  return (
    <div className="container">
      {
      products.map(product => {
        return <div key={product.id} className="product">
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.dsc}</p>
          <p className="price">${product.price}</p>
          <p className="rating">Rating: {product.rate}</p>
          <p className="country">Country: {product.country}</p>
        </div>
})}
    </div>
  );
}

export default Products;
