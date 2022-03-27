import React from "react";
// function logText() {
//   console.log("Hey, stop poking me!");
// }



const Logo = (props) => {
  const { appName, handleClick } = props;
  return (
    <header>
      <h1>Welcome to {appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/561.png" alt="Pokemon" onClick={handleClick} />
    </header>
  );
};

export default Logo;