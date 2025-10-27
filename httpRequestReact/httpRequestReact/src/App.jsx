
import './App.css'
import Header from '../components/Header' 


function App() {
 return (
    <>
      <Header />
      <div className="marketplace-container">
        <h1 className="marketplace-title">Bem-vindo ao PlanetEletro</h1>
        <p className="marketplace-description">Encontre os melhores produtos com os melhores preços!</p>
        
        <button className="marketplace-button">Ver Produtos</button>
      </div>
    </>
  )
}
export default App
