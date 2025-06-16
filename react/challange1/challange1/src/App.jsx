import { useState } from 'react'
import './App.css'

function App() {
  
const [data , setData] = useState(10)
 
 
  return (
    <>
       <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <h1 className="text-2xl font-bold text-blue-600">DIFICINNN MAS TAILWIND COM REACT É REALIDADEEEEE!</h1> </div>
      <p className='bg-slate-700 hover:bg-gray-500'>MAS VOU PEGAR O JEITO</p>
   <div>
    <p>Essa é a variável inicial {data}</p>
    <button onClick={() => setData("o novo valor é  54")}> Alterar por useState</button>
   </div>
    </>
  )
}

export default App
