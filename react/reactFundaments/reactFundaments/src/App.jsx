
import { useState } from 'react'

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
    alert("Por favor, insira um email válido.");
  }
};
  
  
  
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
      
      


  </>
  )
}

export default App
