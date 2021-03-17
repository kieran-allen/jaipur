import { Card, PLAYER, PlayerCards } from "../types";
import { addCardToPlayerCards } from "./addCardToPlayerCards";
import { isCamel } from "./isCamel";

export function playerTakesOneCardFromMarket(
  [deckHead, ...deckLeftover]: Card[],
  market: Card[],
  cardIDToPickup: string,
  playerCards: PlayerCards,
  player: PLAYER
) {
  const cardToTakeIndex = market.findIndex(
    (card) => card.id === cardIDToPickup
  );
  if (cardToTakeIndex < 0) {
    return {
      deck: [deckHead, ...deckLeftover],
      market,
      [player]: playerCards,
    };
  }

  const newPlayerHand = addCardToPlayerCards(
    playerCards,
    market[cardToTakeIndex]
  );

  if (newPlayerHand.hand.length > 7 && !isCamel(market[cardToTakeIndex])) {
    return {
      deck: [deckHead, ...deckLeftover],
      market,
      [player]: playerCards,
    };
  }

  const newMarket = market.map((card, i) => {
    if (i !== cardToTakeIndex) return card;
    return deckHead;
  });
  return {
    deck: deckLeftover,
    market: newMarket,
    [player]: newPlayerHand,
  };
}
