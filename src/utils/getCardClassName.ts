import { CARD } from "../types";

export function getCardClassName(card: CARD): string {
  switch (card) {
    case CARD.DIAMOND:
      return "diamond";
    case CARD.GOLD:
      return "gold";
    case CARD.SILVER:
      return "silver";
    case CARD.CLOTH:
      return "cloth";
    case CARD.SPICE:
      return "spice";
    case CARD.LEATHER:
      return "leather";
    case CARD.CAMEL:
      return "camel";
    default:
      return "";
  }
}
