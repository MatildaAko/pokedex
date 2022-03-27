import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  const logWhenClicked = () => {
    console.log("Hey, stop poking me!");
  };
  return (
    <div>
      <Logo appName="Matilda's Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Wonder Skin", "Magic Guard", "Tinted Lens"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()}/>
    </div>
  );
}

export default App;
