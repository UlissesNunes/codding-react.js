
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
     {id: 23241, name: "Uiliane", age: 2},
    {id: 2153, name: "Mara", age: 34},
    {id: 313515, name: "Marcão", age: 45},
     {id: 12351, name: "Simphony", age: 296426},
    {id: 24624, name: "Alissa", age: 34},
    {id: 346, name: "Cleber", age: 45},
     {id: 1453, name: "Matheus", age: 298678},
    {id: 26567, name: "Marilene", age: 34},
    {id: 35353, name: "Zé", age: 45},
  ])

  const [novosCadastros] = useState([
    {id: 1, name: "Novo Usuário 1", age: 25},
    {id: 2, name: "Novo Usuário 2", age: 30},
    {id: 3, name: "Novo Usuário 3", age: 28},
    {id: 4, name: "Novo Usuário 4", age: 22},
    {id: 5, name: "Novo Usuário 5", age: 35},
    {id: 6, name: "Novo Usuário 6", age: 27},
    {id: 7, name: "Novo Usuário 7", age: 31},
    {id: 8, name: "Novo Usuário 8", age: 29},
    {id: 9, name: "Novo Usuário 9", age: 26},
    {id: 10, name: "Novo Usuário 10", age: 33},
    {id: 11, name: "Novo Usuário 11", age: 24},
    {id: 12, name: "Novo Usuário 12", age: 32},
    {id: 13, name: "Novo Usuário 13", age: 21},
    {id: 14, name: "Novo Usuário 14", age: 36},
    {id: 15, name: "Novo Usuário 15", age: 23},
    {id: 16, name: "Novo Usuário 16", age: 30},
    {id: 17, name: "Novo Usuário 17", age: 28},
    {id: 18, name: "Novo Usuário 18", age: 25},
    {id: 19, name: "Novo Usuário 19", age: 34},
    {id: 20, name: "Novo Usuário 20", age: 29},
    {id: 21, name: "Novo Usuário 21", age: 27},
    {id: 22, name: "Novo Usuário 22", age: 31},
    {id: 23, name: "Novo Usuário 23", age: 26},
    {id: 24, name: "Novo Usuário 24", age: 35},
    {id: 25, name: "Novo Usuário 25", age: 22},
    {id: 26, name: "Novo Usuário 26", age: 33},
    {id: 27, name: "Novo Usuário 27", age: 24},
    {id: 28, name: "Novo Usuário 28", age: 32},
    
  ])

  return (
    <>
     <h1>NOVA FASE</h1>
     <p>Objetivo central = Dominar react e tailwind e fazer meu portifólio inteiro com eles e ter ao menos 5 grandes projetos</p> <p>Sendo 2 deles com REACT/TAILWIND/TYPESCRIPT</p>

     <h2>Cadastro de Usuários </h2>
     <p>here you can add a form to register users, using React.</p>
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
  </>
  )
}

export default App
