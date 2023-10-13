import React, { useState } from "react";
import BoardHeader from "./components/BoardHeader";
import SetPlayersNumber from "./components/SetPlayersNumber";
import SetPlayersName from "./components/SetPlayersName";
import './style/App.css'

const App = () => {
  const [playerQuantity, setPlayerQuantity] = useState(null);
  const [playerNames, setPlayerNames] = useState(null);

  const handleChange = (e) => {
    setPlayerQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    setPlayerNames(["Armin",  "Laci"]);
    console.log(playerNames);
  }

  return (
    <>
        {playerQuantity === null && <SetPlayersNumber handleChange={handleChange} />}
        {(playerQuantity !== null && playerNames === null) && <SetPlayersName playerQuantity={playerQuantity} handleSubmit={handleSubmit}/>}
        {(playerNames && playerQuantity) && <BoardHeader playerNames={playerNames}/>}
    </>
  );
};

export default App;
