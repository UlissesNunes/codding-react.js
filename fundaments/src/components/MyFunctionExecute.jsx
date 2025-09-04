

function MyFunctionExecute( {myfunctionexe} ) {
  return (
    <div>
        <h1>Executando uma função passada por props:</h1>
        <button onClick={myfunctionexe}>Clique para a função ir ao console disparada através do componente filho no componente pai</button>
    </div>
  )
}

export default MyFunctionExecute