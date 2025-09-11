

function myLivros({titulo, autor, ano, genero, preco}) {
  return (
    <> 
    <ul>
    <li>
        <p><strong>Título: {titulo}</strong></p>
        <p>Autor: {autor}</p>   
        <p>Ano: {ano}</p>
        <p>Gênero: {genero}</p>
        <p>Preço: R$ {preco}</p>
        
    </li>
    </ul>
    </>
  )
}

export default myLivros