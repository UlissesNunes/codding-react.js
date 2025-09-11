

function myVestuario({preço, marca, tamanho, cor, tipo}) {
  return (
    <>
    <ul>
        <li>Marca: {marca}</li>
        <li>Tipo: {tipo}</li>
        <li>Tamanho: {tamanho}</li>
        <li>Cor: {cor}</li>
        <li>Preço: R$ {preço}</li>

    </ul>
    
    </>
  )
}

export default myVestuario