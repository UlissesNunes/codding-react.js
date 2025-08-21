import React from 'react'

function myCarList({brand, model, year, color, price}) {
  return (
    <>
   
        <h3>Audi Details:</h3>
     <li>
       <p><strong>Marca: {brand}</strong></p>
       <p>Modelo: {model}</p>
       <p>Ano: {year}</p>
       <p>Cor: {color}</p>
       <p>Preço: R$ {price}</p>
      </li>
    
    <img src="https://www.pixelstalk.net/wp-content/uploads/2016/03/Download-audi-logo-wallpaper-HD.jpg" alt="Carro" />
    </>
  )
}

export default myCarList