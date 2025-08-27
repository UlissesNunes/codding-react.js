import'../App.css'


function myMoveis({preço, cor, material, tipo}) {
  return (
  <>
 
    <ul >
        <li><strong>Tipo:</strong> {tipo}</li>
        <li>Material: {material}</li>
        <li>Cor: {cor}</li>
        <li>Preço: R$ {preço}</li>
    </ul>
    {preço > 2200 && <p><strong>Este móvel é Premium!</strong></p>}
  </>
  )
}

export default myMoveis