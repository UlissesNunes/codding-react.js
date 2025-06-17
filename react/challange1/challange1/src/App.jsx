import SecaoModule from '/componets/SecaoModule'


import { useState } from 'react'

import './App.css'

function App() {
 
const [data , setData] = useState(10)

console.log(data)


const [lista] = useState([ "item 1", "item 2", "item 3" , "item 14", "item 452", "item 354", "item 654", "item 1234", "item 12345", "item 123456", "item 1234567"])
// useState é um hook do React que permite adicionar o estado local a um componente funcional.
// Ele retorna um array com dois elementos: o valor atual do estado e uma função para atual
const [lista2] = useState([{id: 1, nome: "item 1"}, {id: 2, nome: "item 267"}, {id: 3, nome: "item 3"}])
 
 
  return (
    <>
    <SecaoModule />
       <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <h1 className="text-2xl font-bold text-blue-600">DIFICINNN MAS TAILWIND COM REACT É REALIDADEEEEE!</h1> </div>
      <p className='bg-slate-300 hover:bg-gray-100'>MAS VOU PEGAR O JEITO</p>
   <div>
    <p className='p-2 m-3 bg-slate-300 text-fuchsia-950'>Essa é a variável inicial <strong className='ml-4 '>{data}</strong></p>
    
    <button className='bg-gray-900 text-neutral-300 p-2 mb-14 min-w-max h-12'  onClick={() => setData(data + 1)}> Alterar por useState</button>
   </div>

   <ul>
    {/* Aqui nesse trecho aparecerá o nosso item que tá no array lá em cima e ao msm tempo seu index ou seja item 1 = 1 + seu index, por ser o primeiro recebe 0. */}
    {lista.map((item, index) => (
      <li key={index} className='bg-slate-200 flex justify-end'>{item}</li>
       
    ))}                
   </ul>

   <ul>
    {lista2.map((item) => (
      <li key={item.id} className='bg-slate-200 flex justify-end'>{item.nome}</li>
    ))}
   </ul>
    </>
  )
}

export default App
