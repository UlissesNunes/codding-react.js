import "./App.css";
import Header from "../components/Header";
import TopoMain from "../components/TopoMain";
import Footer from "../components/Footer";
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
     
<TopoMain />
      
        <main className="produtosVisu">
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name}
          
                Preço - R$: <span className="productPrice">{product.price}</span>
                <br />
                <img src={product.image} alt={product.name} />
              </li>
            ))}
          </ul>
        </main>
      <Footer />
    </>
  );
}

export default App;
