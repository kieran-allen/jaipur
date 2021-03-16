import { Card, CARD, PLAYER, PlayerCards } from "../types";

export function playerPicksUpCard(
  [head, ...tail]: Card[],
  playerCards: PlayerCards,
  player: PLAYER
) {
  const newPlayerCards =
    head.type !== CARD.CAMEL
      ? {
          hand: [head, ...playerCards.hand],
          herd: playerCards.herd,
        }
      : {
          hand: playerCards.hand,
          herd: [head, ...playerCards.herd],
        };
  return {
    deck: [...tail],
    [player]: newPlayerCards,
  };
}
