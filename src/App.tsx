import React, { useEffect, useState } from "react";
import { Market } from "./components/Market";
import { PlayerHand } from "./components/PlayerHand";
import { PlayerHerd } from "./components/PlayerHerd";
import { Token } from "./components/Token";
import { Tokens } from "./components/Tokens";
import { GameContext } from "./context/GameContext";
import { GameState, PLAYER } from "./types";
import { generateInitialGameState } from "./utils/generateInitialGameState";
import { marketPicksUpTimes } from "./utils/marketPicksUpTimes";
import { playerPicksUpCardTimes } from "./utils/playerPicksUpCardTimes";

export function App() {
  const [state, update] = useState<GameState>(generateInitialGameState());

  useEffect(() => {
    const { deck: remainingDeck1, ...p1Hand } = playerPicksUpCardTimes(
      state.deck,
      state[PLAYER.P1],
      PLAYER.P1,
      5
    );
    const { deck: remainingDeck2, ...p2Hand } = playerPicksUpCardTimes(
      remainingDeck1,
      state[PLAYER.P2],
      PLAYER.P2,
      5
    );
    const { market, deck } = marketPicksUpTimes(
      state.market,
      remainingDeck2,
      2
    );
    update({
      ...state,
      deck,
      market,
      ...p1Hand,
      ...p2Hand,
    });
  }, []);

  return (
    <GameContext.Provider value={{ state, update }}>
      <h1 className="m-4 text-4xl font-bold text-white">
        Cards left: {state.deck.length}
      </h1>

      <div className="grid grid-cols-9">
        <div className="border-r-2 col-span-4">
          <h2 className="m-4 text-3xl font-bold text-white">🃏 Player hand</h2>
          <PlayerHand player={PLAYER.P1} />
          <PlayerHerd player={PLAYER.P1} />
        </div>
        <div className="col-span-1">
          <Tokens />
        </div>
        <div className="col-span-4">
          <h2 className="m-4 text-3xl font-bold text-white">🃏 Market hand</h2>
          <Market />
        </div>
      </div>
    </GameContext.Provider>
  );
}
