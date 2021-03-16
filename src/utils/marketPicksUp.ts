import { Card, CARD } from "../types";

export function marketPicksUp(market: Card[], [head, ...tail]: Card[]) {
  return {
    market: [...market, head],
    deck: [...tail],
  }
}
