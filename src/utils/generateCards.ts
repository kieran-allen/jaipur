import { v4 as uuidv4 } from "uuid";
import { Card, CARD } from "../types";

export function generateCards(
  typeOfCard: CARD,
  howManyToGenerate: number
): Card[] {
  return Array(howManyToGenerate)
    .fill({ type: typeOfCard })
    .map((c) => ({ ...c, id: uuidv4() }));
}
