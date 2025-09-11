

function Handlemarca( {handleMarca} ) {
    const marcas = ['Nike', 'Adidas', 'Puma', 'Reebok'];
  return (
    <div>
        <button onClick={() => handleMarca(marcas[0])}> 1</button>
        <button onClick={() => handleMarca(marcas[1])}> 2</button>
        <button onClick={() => handleMarca(marcas[2])}> 3</button>

    </div>
  )
}

export default Handlemarca