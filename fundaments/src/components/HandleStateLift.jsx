

function HandleStateLift( {handleClick}) {

const messagens = [ "Romario ","Gonzalo Higuain", "Keylor Navas", "Luis Suarez" , "Ricardo isekson Kaká" , "Neymar Jr", "Cristiano Ronaldo", "Lionel Messi" ]; 
    
  return (
    
   <>
<button className="Romario" onClick={() => {
  handleClick(messagens[0]);}}>0</button>
 <button className="GonzaloHiguain" onClick={ () => {handleClick(messagens[1])}}>1</button>
 <button className="KeylorNavas" onClick={ () => {handleClick(messagens[2])}}>2</button>
 <button className="LuisSuarez" onClick={ () => {handleClick(messagens[3])}}>3</button>
  <button className="Kaká" onClick={ () => {handleClick(messagens[4])}}>4</button>
 <button className="Neymar" onClick={ () => {handleClick(messagens[5])}}>5</button>
 <button className="Ronaldo" onClick={ () => {handleClick(messagens[6])
    alert("Parabéns, ganhou o jogo!")
 }}>6</button>
 <button className="Messi" onClick={ () => {handleClick(messagens[7])}}>7</button>


 {messagens && messagens.map( (item, index) => (
    <div> <ul> <li key={index}> {index} {item} </li></ul></div>
 )) 
 }
 
   </>
  )
}

export default HandleStateLift