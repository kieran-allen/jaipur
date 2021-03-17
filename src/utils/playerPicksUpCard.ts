import { Card, PLAYER, PlayerCards } from "../types";
import { addCardToPlayerCards } from "./addCardToPlayerCards";

export function playerPicksUpCard(
  [head, ...tail]: Card[],
  playerCards: PlayerCards,
  player: PLAYER
) {
  const newPlayerCards = addCardToPlayerCards(playerCards, head);
  return {
    deck: [...tail],
    [player]: newPlayerCards,
  };
}
