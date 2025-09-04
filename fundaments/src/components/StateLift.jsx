
function StateLift() {
  return (
    <>
        <h1>State Lift</h1>
        <p>State Lift é o processo de mover o state para um componente pai comum, para que ambos os componentes filhos possam acessá-lo e compartilhá-lo.</p>
        <p>Isso é útil quando dois componentes irmãos precisam compartilhar o mesmo estado ou quando um componente filho precisa atualizar o estado de outro componente filho.</p>
    </>

  )
}

export default StateLift