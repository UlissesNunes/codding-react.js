import "app.css"


function myMoveis({preço, cor, material, tipo}) {
  return (
  <>
  <h2>Detalhes do Móvel:</h2>
    <ul >
        <li><strong>Tipo:</strong> {tipo}</li>
        <li>Material: {material}</li>
        <li>Cor: {cor}</li>
        <li>Preço: R$ {preço}</li>
    </ul>
  </>
  )
}

export default myMoveis