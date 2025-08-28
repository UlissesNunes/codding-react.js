import { useState } from 'react'
import MyCarList from './components/myCarList.jsx' 
import MyVestuario from './components/myVestuario.jsx'
import MyMoveis from './components/myMoveis.jsx'
import MyLivros from './components/myLivros.jsx'
import PropChildren from './components/propChildren.jsx'
import Mensagem from './components/mensagem.jsx'
import NewFunctionProp from './components/newFunctionProp.jsx'  
import ExecuteFunction from './components/executeFunction.jsx'
import MyDreams from './components/myDreams.jsx'  
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

  const MyCars = [
    { id: 1, brand: 'Volkswagen', model: 'Polo', year: '2019', color: 'Preto', price: 800000, imgSrc:"https://listcarbrands.com/wp-content/uploads/2015/10/Volkswagen-logo-Description.jpg", altText:"Carro" },
    { id: 2, brand: 'Volkswagen', model: 'Jetta', year: '2021', color: 'Branco', price: 70000 },
    { id: 3, brand: 'Volkswagen', model: 'Golf', year: '2017', color: 'Prata', price: 65000 },
    { id: 4, brand: 'Volkswagen', model: 'Amarok', year: '2024', color: 'Azul', price: 190000 },
    { id: 5, brand: 'Volkswagen', model: 'Tcross', year: '2020', color: 'Vermelho', price: 120000 }
  ]

  const VestuarioCompleto = [
    { id: 1, tipo: 'Camisa', marca: 'Nike', tamanho: 'M', cor: 'Preto', preco: 150 },
    { id: 2, tipo: 'Calça', marca: 'Adidas', tamanho: 'G', cor: 'Azul', preco: 200 },
    { id: 3, tipo: 'Jaqueta', marca: 'Puma', tamanho: 'GG', cor: 'Vermelho', preco: 300 },
    { id: 4, tipo: 'Tênis', marca: 'Reebok', tamanho: '42', cor: 'Branco', preco: 250 },
    { id: 5, tipo: 'Boné', marca: 'New Era', tamanho: 'Único', cor: 'Cinza', preco: 100 } 
  ]

  const MeusMoveisNovos = [
    { id: 1, tipo: 'Sofá', material: 'Couro', cor: 'Marrom', preço: 2500 },
    { id: 2, tipo: 'Mesa de Jantar', material: 'Madeira', cor: 'Branco', preço: 1800 },
    { id: 3, tipo: 'Cadeira', material: 'Plástico', cor: 'Preto', preço: 300 },
    { id: 4, tipo: 'Estante', material: 'Metal', cor: 'Cinza', preço: 1200 },
    { id: 5, tipo: 'Cama', material: 'Madeira', cor: 'Natural', preço: 2000 },
    { id: 6, tipo: 'Guarda-Roupa', material: 'MDF', cor: 'Branco', preço: 2200 },
    { id: 7, tipo: 'Rack para TV', material: 'Madeira', cor: 'Preto', preço: 900 },
    { id: 8, tipo: 'Mesa de Centro', material: 'Vidro', cor: 'Transparente', preço: 600 },
    { id: 9, tipo: 'Poltrona', material: 'Tecido', cor: 'Azul', preço: 800 },
    { id: 10, tipo: 'Aparador', material: 'Madeira', cor: 'Marrom', preço: 700 },
    { id: 11, tipo: 'Cômoda', material: 'MDF', cor: 'Branco', preço: 1500 },
    { id: 12, tipo: 'Escrivaninha', material: 'Madeira', cor: 'Natural', preço: 1300 },
    { id: 13, tipo: 'Banco', material: 'Metal', cor: 'Preto', preço: 400 },
    { id: 14, tipo: 'Prateleira', material: 'Madeira', cor: 'Branco', preço: 500 },
    { id: 15, tipo: 'Cadeira de Escritório', material: 'Couro', cor: 'Preto', preço: 1100 },
    { id: 16, tipo: 'Mesa de Escritório', material: 'Madeira', cor: 'Marrom', preço: 1600 },
    { id: 17, tipo: 'Cama Box', material: 'Tecido', cor: 'Cinza', preço: 3000 },
    { id: 18, tipo: 'Berço', material: 'Madeira', cor: 'Branco', preço: 1400 },
    { id: 19, tipo: 'Cadeira de Balanço', material: 'Madeira', cor: 'Natural', preço: 750 },
    { id: 20, tipo: 'Mesa Lateral', material: 'Metal', cor: 'Dourado', preço: 550 }

  ]
    const livros = [
      { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: 1954, genero: 'Fantasia', preco: 120.00 },
      { id: 2, titulo: '1984', autor: 'George Orwell', ano: 1949, genero: 'Distopia', preco: 80.00 },
      { id: 3, titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', ano: 1605, genero: 'Clássico', preco: 150.00 },
      { id: 4, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', ano: 1943, genero : 'Infantil', preco: 50.00 },
      { id: 5, titulo: 'A Revolução dos Bichos', autor: 'George Orwell', ano: 1945, genero: 'Satírico', preco:  70.00 }
  ] 


  const MyLifeDreams = [
    { id: 1, profissional: 'Desenvolvedor Full Stack', area: 'Tecnologia', salario: 18000 },
    { id: 2,
      pessoal:  'Sonho de Conhecer Israel, Jerusalém e os locais onde meu Jesus passou, Quero ainda conhecer a Alianz Arena e ver Jamal 10 em campo, Casar com Mariana alcantara de santana aos 21 anos e ela com 23' , 
      paises: 'Alemanha,  Israel, Inglaterra'
     },
    { id: 3, financeiro: 'Ter uma estabilidade financeira para viver com meu amorzinho de 1,48, com uma reserva de emergência e investimentos que me permitam viver confortavelmente.' },
    { id: 4, viagem: 'Viajar pelo menos duas vezes por ano, explorando novos destinos e culturas.' },
    { id: 5, hobby: 'Aprender e desenvolver diáriamente com minha familia '} 
  ]

  const mensagem = () => {
    alert('Função disparada!')
  }

  
  const lidarComClique = () => {
    console.log('O botão no componente filho foi clicado!');
  };


  const MyFunction = () => {
    console.log('Função passada como prop foi executada!');
    let x = 5;
    let y = 10;
    console.log(x + y);
  }

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

    <section className="car">
      <h3>Lista renderizada de carros:</h3>
      <MyCarList brand="Audi" model="X5" year="2022" color="Preto" price={300000} />
      <MyCarList brand="Audi" model="A4" year="2021" color="Branco" price={250000} />
      <MyCarList brand="Audi" model="Corolla" year="2020" color="Prata" price={120000} />
      <MyCarList brand="Audi" model="Seltos" year="2023" color="Marrom" price={350000} />
    </section>
  <h1>Volkswagen</h1>

  {/* Aqui estamos usando o map para percorrer o array de objetos MyCars e renderizar um componente MyCarList para cada carro na lista. */ 
  }
  <section className="volksvagenCar">
    {MyCars.map((car) => (
      <MyCarList
        brand={car.brand}
        model={car.model}
        year={car.year}
        color={car.color}
        price={car.price}
        key={car.id}
        />
        ))}
  </section>
    <section className='vestuario'> 
      {VestuarioCompleto.map((vestuario ) => (
        <MyVestuario
        preço={vestuario.preco}
        marca={vestuario.marca}
        tamanho={vestuario.tamanho}
        cor={vestuario.cor}
        tipo={vestuario.tipo}
        key={vestuario.id}
        />

      ))}
</section>

    <section className='moveis'>
      {MeusMoveisNovos.map((moveis) => (
        <MyMoveis
        preço={moveis.preço}
        material={moveis.material}
        cor={moveis.cor}
        tipo={moveis.tipo}
        key={moveis.id}
        />
      ))}
  </section>

  <section>
    {livros.map((livro) => (
      <MyLivros
      titulo={livro.titulo}
      autor={livro.autor}
      ano={livro.ano}
      genero={livro.genero}
      preco={livro.preco}
      key={livro.id}
      />
    ))}
  </section>

  <section>
    <h3>Meus Sonhos:</h3>

{MyLifeDreams.map((dream) => (
  <ul>
    <MyDreams
      key={dream.id}
      profissional={dream.profissional}
      area={dream.area}
      salario={dream.salario}
      pessoal={dream.pessoal}
      paises={dream.paises}
      financeiro={dream.financeiro}
      viagem={dream.viagem}
      hobby={dream.hobby}
    />
  </ul>
))}
   
</section>
  


  {/* A PROPIEDADE - PROPS CHILDREN*/}
 
    
      <PropChildren>
          <p>Você pode passar qualquer elemento ou componente como children.</p>
      </PropChildren>
     
     <Mensagem myFunction={mensagem} />
      


        <div>
      <h1>Componente Pai</h1>
      {/* 2. Passamos a função para o componente filho */}
      <NewFunctionProp aoClicar={lidarComClique} />
    </div>


    {/* 3. No componente filho, a função é chamada quando o botão é clicado */}
  
   <ExecuteFunction MyFunction={MyFunction} />

    </>
  )
}

export default App
