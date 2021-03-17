import { Card, PlayerCards } from "../types";
import { isCamel } from "./isCamel";

export function addCardToPlayerCards(playerCards: PlayerCards, newCard: Card) {
  return !isCamel(newCard)
    ? {
        ...playerCards,
        hand: [newCard, ...playerCards.hand],
        herd: playerCards.herd,
      }
    : {
        ...playerCards,
        hand: playerCards.hand,
        herd: [newCard, ...playerCards.herd],
      };
}
