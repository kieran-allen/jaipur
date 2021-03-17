import { Card, PlayerCards } from "../types";
import { addCardToPlayerCards } from "./addCardToPlayerCards";

export function addCardsToPlayerCards(
  playerCards: PlayerCards,
  [topCardToAdd, ...restCardsToAdd]: Card[]
): {
  hand: Card[];
  herd: Card[];
} {
  const newPlayerCards = addCardToPlayerCards(playerCards, topCardToAdd);
  if (!restCardsToAdd.length) {
    return newPlayerCards;
  }
  return addCardsToPlayerCards(newPlayerCards, restCardsToAdd);
}
