import { Card, CARD, PLAYER, PlayerCards } from "../types";
import { playerPicksUpCard } from "./playerPicksUpCard";

export function playerPicksUpCardTimes(
  [head, ...tail]: Card[],
  playerCards: PlayerCards,
  player: PLAYER,
  times: number
): {
  [x: number]: {
    hand: Card[];
    herd: Card[];
  };
  deck: Card[];
} {
  if (times <= 1) {
    return playerPicksUpCard([head, ...tail], playerCards, player);
  }
  const ret = playerPicksUpCard([head, ...tail], playerCards, player);
  return playerPicksUpCardTimes(ret.deck, ret[player], player, times - 1);
}
