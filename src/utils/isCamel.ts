import { CARD, Card } from "../types";

export function isCamel(card: Card): boolean {
  return card.type === CARD.CAMEL;
}
