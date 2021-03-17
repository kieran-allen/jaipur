import { CARD, Card, PLAYER, PlayerCards } from "../types";
import { addCardToPlayerCards } from "./addCardToPlayerCards";
import { isCamel } from "./isCamel";

export function playerTakesOneCardFromMarket(
  [deckHead, ...deckLeftover]: Card[],
  market: Card[],
  cardIDToPickup: string,
  playerCards: PlayerCards,
  player: PLAYER,
  cardsIdsToIgnore: string[] = []
): {
  deck: Card[];
  market: Card[];
  [x: number]: {
    hand: Card[];
    herd: Card[];
    selectedCards: Card[];
  };
} {
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
  const cardToTake = market[cardToTakeIndex];
  const newPlayerHand = addCardToPlayerCards(
    playerCards,
    market[cardToTakeIndex]
  );

  if (newPlayerHand.hand.length > 7 && !isCamel(cardToTake)) {
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

  if (isCamel(cardToTake)) {
    // find the next camel
    const camelToPickup = newMarket.find((card) => {
      if (cardsIdsToIgnore.includes(card.id)) {
        return false;
      }
      return card.type === CARD.CAMEL;
    });
    if (camelToPickup) {
      return playerTakesOneCardFromMarket(
        deckLeftover,
        newMarket,
        camelToPickup.id,
        newPlayerHand,
        player,
        [deckHead.id, ...cardsIdsToIgnore]
      );
    }
    return {
      deck: deckLeftover,
      market: newMarket,
      [player]: newPlayerHand,
    };
  }
  return {
    deck: deckLeftover,
    market: newMarket,
    [player]: newPlayerHand,
  };
}
