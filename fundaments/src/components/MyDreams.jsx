import PropTypes from 'prop-types';
// utilizamos o prop-types para validar as props que são passadas para o componente
// e também para definir valores padrão para as props que não são passadas
// fazendo assim evitamos erros no código garantindo que o componente sempre terá valores válidos para trabalhar ao renderizar a interface gráfica do usuário.

function MyDreams({ profissional, salario, area, pessoal, paises, financeiro, viagem, hobby }) {
  return (
    <>
    <ul>
        {profissional && ( 
          <li>Profissional: {profissional} na área de {area} com uma consolidação financeira de R$ {salario}</li> )}
        {pessoal && (
          <li>Pessoal: {pessoal} {paises}</li>
           )}
        {financeiro && (
            <li>Financeiro: {financeiro}</li>
             )}
        {viagem && (
            <li>Viagem: {viagem}</li>
             )}
        {hobby && (
            <li>Hobby: {hobby}</li>
             )} 
   </ul>
    </>
  );
}

// validando as props que são passadas para o componente

MyDreams.propTypes = {
    profissional: PropTypes.string,
    salario: PropTypes.number,
    area: PropTypes.string,
    pessoal: PropTypes.string,
    paises: PropTypes.string,
    financeiro: PropTypes.string,
    viagem: PropTypes.string,
    hobby: PropTypes.string,
    };

    // definindo valores padrão para as props que não são passadas

MyDreams.defaultProps = {
    profissional: 'Não informado',
    salario: 0,
    area: 'Não informado',
    pessoal: 'Não informado',
    paises: 'Não informado',
    financeiro: 'Não informado',
    viagem: 'Não informado',
    hobby: 'Não informado',
    };

export default MyDreams;