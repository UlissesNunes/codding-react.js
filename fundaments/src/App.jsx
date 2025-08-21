import { useState } from 'react'

import './App.css'

function App() {
  const name = [useState('Ulisses')]

  const celulares = [
    { id: 1, nome: 'iPhone 17', marca: 'apple', ano: '2026', cor: 'preto', tela: 'amoled', preco: 11000  },
    { id: 2, nome: 'Samsung Galaxy S22', preco: 1900 },
    { id: 3, nome: 'Google Pixel 6', preco: 1800 },
    { id: 4, nome: 'OnePlus 9', preco: 1700 },
    { id: 5, nome: 'Xiaomi Mi 11', preco : 1600 }
  ]

  return (
    <>
     <h1>{name}, Aprofunde seus Fundamentos do react</h1>
      

      <h2>Lista de Array de Objetos</h2>
      <ul>
        {celulares.map((celular) => (
           <li key={celular.id} >
            <strong>{celular.nome}</strong>
           <img src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020_big.jpg.medium_2x.jpg" alt="" />
            <p>R$ {celular.preco} 
              <br />
              Marca: {celular.marca ? celular.marca : 'Marca não informada'}
              <br />
              Ano: {celular.ano ? celular.ano : 'Ano não informado'}
              <br />
              Cor: {celular.cor ? celular.cor : 'Cor não informada'}
              <br />
              Tela: {celular.tela ? celular.tela : 'Tela não informada'}
            </p>
           </li>
          
        ))}
      </ul>
{/*
* Aqui entendemos que com o map podemos pegar qualquer dado de listas (pode ser uma api externa também ) na parte lógica e importamos aqui 

* PRECISAMOS DO KEY PARA NÃO DAR ERRO NO CONSOLE, É UMA CHAVE ÚNICA PARA CADA ITEM DA LISTA

* Assim conseguimos renderizar listas de objetos, arrays, etc.
*/ } 
    </>
  )
}

export default App
