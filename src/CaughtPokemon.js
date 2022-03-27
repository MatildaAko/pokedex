import React, { useState } from "react";


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  // const allPokemon = []
  function increaseCount() {
    setCaught(caught.concat("Bulbasaur"));
  }
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <button onClick={increaseCount}>Catch Pokemon</button>
      <ul>{caught.map((pokemon, index) => {
        return <li key={index}>{pokemon}</li>;
      }) }</ul>
    </div>
  );
};



export default CaughtPokemon;