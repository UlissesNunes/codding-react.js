
import { useState } from 'react'
import MylistCar from "./componets/MylistCar.jsx"


import './App.css'

function App() {
  const [users] = useState([
    {id: 153513, name: "Ulisses", age: 29},
    {id: 215335, name: "Maria", age: 34},
    {id: 3353513, name: "João", age: 45}, 
     {id: 153535, name: "Lucas", age: 29},
    {id: 22435, name: "Mari", age: 34},
    {id: 312424, name: "Jô", age: 45},
 
  ])

  const [novosCadastros] = useState([
    {id: 1, name: "Novo Usuário 1", age: 25},
    {id: 2, name: "Novo Usuário 2", age: 30},
    {id: 3, name: "Novo Usuário 3", age: 28},
    
    
  ])
  

  
  const [name] = useState("Ulisses")
  const [age] = useState(29)

  
const [email, setEmail] = useState("")
const emailEnvio = () => {
  if (email) {
    if(email.includes("@TecSchool.com")) {
      window.location.href = "https://oficinacrossbike.com.br"
    } 
  } else {
    window.alert("Por favor, insira um email válido.");
  }
};


 const carList = [
  { id: 1, name: "Fusca 1970", color: "azul", price: 15000 },
  { id: 2, name: "Civic 2020", color: "preto", price: 90000 },
  { id: 3, name: "Gol 2018", color: "branco", price: 45000 },
  { id: 4, name: "Onix 2021", color: "prata", price: 60000 },
  { id: 5, name: "Fiesta 2015", color: "vermelho", price: 30000 },
  { id: 6, name: "Palio 2012", color: "verde", price: 20000 },
  { id: 7, name: "Corolla 2019", color: "azul", price: 80000 },
  { id: 8, name: "HB20 2022", color: "preto", price: 70000 },
  { id: 9, name: "Sandero 2016", color: "branco", price: 35000 }


 ]
  
  
  
  
  return (
    <>
     <h1>NOVA FASE</h1>
     <p>Objetivo central = Dominar react e tailwind e fazer meu portifólio inteiro com eles e ter ao menos 5 grandes projetos</p> <p>Sendo 2 deles com REACT/TAILWIND/TYPESCRIPT</p>

     <h2>Cadastro: </h2>
    
      <ul>
        {users.map((user) => (
          <li key={user.id} className>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <ul>
        {novosCadastros.map((novosCad) => (
          <li key={novosCad.id}> 
          {novosCad.name} - {novosCad.age}
          </li>
          
        ))}
        
      </ul>

      <section>
        <h2>IF ELSE TERNÁRIO</h2>

      <p>
  {name === "Ulisses" ? "Bem vindo a sua conta, Ulisses!" : "Não tem cadastro? crie agora!"}{" "}
  {age > 1 ? `sua idade é ${age}!` : "idade não encontrada"}
</p>

      </section>
      <hr />

      <h2>Notas</h2>

      <p> Insira email : <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <input type="button" value="Enviar" onClick={emailEnvio} /> </p>
     <ul> 
      {carList.map((car) => (< MylistCar 
        key={car.id}      
        name={car.name}
        color={car.color}
        price={car.price.toLocaleString('pt-BR')}
        />
      ))}
</ul>
  </>
  )
}

export default App
