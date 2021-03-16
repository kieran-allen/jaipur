import { Card, CARD } from "../types";
import { marketPicksUp } from "./marketPicksUp";

export function marketPicksUpTimes(
  market: Card[],
  deck: Card[],
  times: number
): { market: Card[]; deck: Card[] } {
  if (times <= 1) {
    return marketPicksUp(market, deck);
  }
  const { market: newMarket, deck: newDeck } = marketPicksUp(market, deck);
  return marketPicksUpTimes(newMarket, newDeck, times - 1);
}
