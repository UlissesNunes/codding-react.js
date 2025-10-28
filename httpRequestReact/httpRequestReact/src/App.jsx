import "./App.css";
import Header from "../components/Header";
import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Header />
      <section className="destaque-menu"><img src="/public/ELETROSTORE.png" alt="" /></section>
      <main className="marketplace-container">
        <p className="p">bem vindo a</p>
        <h1 className="marketplace-title">EletroStore Bahia</h1>
        <p className="marketplace-description">
          Rápido e fácil: Encontre eletrodomésticos de qualidade com preços que cabem no seu bolso.
        </p>

        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} 
              
              Preço - R$: {product.price}
              <br />
              <img src={product.image} alt={product.name} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
