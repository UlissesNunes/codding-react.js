import { useState } from 'react'
import MyCarList from './components/myCarList.jsx' 
import './App.css'

function App() {
  const name = [useState('Ulisses')]

  const celulares = [
    { id: 1, nome: 'iPhone 17', marca: 'apple', ano: '2026', cor: 'preto', tela: 'amoled', preco: 11000  },
    { id: 2, nome: 'Samsung Galaxy S22', marca: 'samsung', preco: 1900 },
    { id: 3, nome: 'Google Pixel 6', marca: 'google', preco: 1800 },
    { id: 4, nome: 'OnePlus 9', cor:'Rosa', preco: 1700 },
    { id: 5, nome: 'Xiaomi Mi 11', marca: 'Xiaomi' , cor: 'branco', tela: 'amoled', preco : 1600 }
  ]

  return (
    <> <h1>{name}, Aprofunde seus Fundamentos do react</h1>
  <h2>Lista de Array de Objetos:</h2>
  <ul>
    {celulares.map((celular) => (
      <li key={celular.id} >
        <strong>{celular.nome}</strong>
        <img src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020_big.jpg.medium_2x.jpg" alt="img celular" />
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

<h2>Renderização de Listas através dos components</h2>

    <h3>Lista renderizada de carros:</h3>
    <MyCarList brand="Audi" model="X5" year="2022" color="Preto" price={300000} />
    <MyCarList brand="Audi" model="A4" year="2021" color="Branco" price={250000} />
    <MyCarList brand="Audi" model="Corolla" year="2020" color="Prata" price={120000} />
    <MyCarList brand="Audi" model="Civic" year="2019" color="Azul" price={90000} />
    <MyCarList brand="Audi" model="Focus" year="2018" color="Vermelho" price={80000} />
    <MyCarList brand="Audi" model="Onix" year="2023" color="Cinza" price={70000} />
    <MyCarList brand="Audi" model="Gol" year="2022" color="Amarelo" price={60000} />
    <MyCarList brand="Audi" model="Uno" year="2021" color="Verde" price={50000} />
    <MyCarList brand="Audi" model="Kicks" year="2020" color="Laranja" price={40000} />
    <MyCarList brand="Audi" model="HB20" year="2019" color="Roxo" price={30000} />
    <MyCarList brand="Audi" model="Seltos" year="2023" color="Marrom" price={350000} />


    </>
  )
}

export default App
