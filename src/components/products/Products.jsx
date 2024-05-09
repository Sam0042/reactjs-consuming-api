import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Products = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
    // console.log(products);
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {products.map((produk) => {
          return (
            <div>
              <CardProduct key={produk.id} title={produk.title} image={produk.image} desc={produk.description} price={produk.price} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function CardProduct(props) {
  return (
    <div style={{ backgroundColor: "lightblue", width: "15rem", height: "auto", marginBottom: "20px", textAlign: "center", padding: "10px", borderRadius: "25px" }}>
      <img src={props.image} alt="" style={{ width: "100%" }} />
      <p>{props.title}</p>
      <p>{props.desc}</p>
      <p>Price: ${props.price}</p>
      <button style={{ padding: "0.3rem 1.3rem" }}>Details</button>
    </div>
  );
}

export default Products;
