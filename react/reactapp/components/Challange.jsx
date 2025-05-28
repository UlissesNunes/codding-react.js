

const Challange = () => {
    const valores = {
        vlorA:  154,
        valorB: 23,
        valorC: 653,
    }
    const desafio = () => {
        console.log( valores.vlorA + valores.valorB + valores.valorC);
        alert(`A soma dos valores é ${valores.vlorA + valores.valorB + valores.valorC}`);
       }
  return (
    <>
    <h1>dd</h1>
    <p>
        os valores escolhidos  foram {valores.vlorA} , { valores.valorB} e {valores.valorC}
        </p>

        <button onClick={desafio}>Clique para ver a soma dos valores </button>

        <p>olhe o console </p>
    
    </>
  )
}

export default Challange;
