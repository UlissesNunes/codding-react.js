

export const GameDetails = ({name , age,  job}) => {
  return (
  <>
  <p>Nome é {name}</p>
    <p>Idade é {age}</p>
    <p>Profissão é {job}</p>
    <hr />
    <p>
        status : {age >= 18 ?  ( " maior de idade ") : ( "menor de idade" )}
        </p>
  </>
  )
}

export default GameDetails