import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/CSS/Home.css";

function Home() {
  const [dogs, setDogs] = useState([]);

  function getData() {
    fetch(
      "https://doggystickers.vercel.app/_next/data/xyaZmLIU1DsdFtyNNRye4/index.json"
    )
      .then((res) => res.json())
      .then((data) => setDogs(data.pageProps.products));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="home">
      <div className="container">
        <h1>Get Doggy Stickers</h1>
        <p>
          Times are tough. Liven up your home with some cute Doggy Stickers. 🐶
        </p>

        <div id="dogCards">
          {dogs.map((item) => (
            <div className="dogCard" key={item.node.id}>
              <Link to={`/product/${item.node.id}`}>
                <img
                  src={item.node.images.edges[0].node.originalSrc}
                  alt={item.node.title}
                />

                <div className="dogCardBody">
                  <h2>{item.node.title}</h2>
                  <p>{item.node.description}</p>
                  <div className="dogCardAbsolute">
                    ${item.node.variants.edges[0].node.price}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
