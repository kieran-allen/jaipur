import { CARD, Card, PlayerCards } from "../types";
import { isCamel } from "./isCamel";

export function addCardToPlayerCards(playerCards: PlayerCards, newCard: Card) {
  return !isCamel(newCard)
    ? {
        hand: [newCard, ...playerCards.hand],
        herd: playerCards.herd,
      }
    : {
        hand: playerCards.hand,
        herd: [newCard, ...playerCards.herd],
      };
}
