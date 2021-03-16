import React, { useEffect, useState } from "react";
import { Market } from "./components/Market";
import { PlayerHand } from "./components/PlayerHand";
import { PlayerHerd } from "./components/PlayerHerd";
import { Token } from "./components/Token";
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
      <PlayerHand player={PLAYER.P1} />
      <PlayerHerd player={PLAYER.P1} />
      <PlayerHand player={PLAYER.P2} />
      <PlayerHerd player={PLAYER.P2} />
      <Market />
      <Token token={state.clothTokens} />
    </GameContext.Provider>
  );
}
