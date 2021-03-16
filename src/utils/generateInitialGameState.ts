import { BONUS_TOKENS, CARD, GameState, PLAYER, PlayerCards } from "../types";
import { generateCards } from "./generateCards";
import { generateTokens } from "./generateCardTokens";
import { shuffle } from "./shuffle";

export function generateInitialGameState(): GameState {
  return {
    deck: shuffle([
      ...generateCards(CARD.DIAMOND, 6),
      ...generateCards(CARD.GOLD, 6),
      ...generateCards(CARD.SILVER, 6),
      ...generateCards(CARD.CLOTH, 8),
      ...generateCards(CARD.SPICE, 8),
      ...generateCards(CARD.LEATHER, 8),
      ...generateCards(CARD.CAMEL, 8), // -3 because of the initial market state.
    ]),

    diamondTokens: generateTokens(CARD.DIAMOND, [7, 7, 5, 5, 5]),
    goldTokens: generateTokens(CARD.GOLD, [6, 6, 5, 5, 5]),
    silverTokens: generateTokens(CARD.SILVER, [5, 5, 5, 5, 5]),
    clothTokens: generateTokens(CARD.CLOTH, [5, 3, 3, 2, 2, 1, 1]),
    spiceTokens: generateTokens(CARD.SPICE, [5, 3, 3, 2, 2, 1, 1]),
    leatherTokens: generateTokens(CARD.LEATHER, [4, 3, 2, 1, 1, 1, 1, 1, 1]),
    camelTokens: generateTokens(CARD.CAMEL, [5]),

    threeBonusTokens: shuffle(
      generateTokens(BONUS_TOKENS.THREE, [3, 3, 2, 2, 2, 1, 1])
    ),
    fourBonusTokens: shuffle(
      generateTokens(BONUS_TOKENS.FOUR, [6, 6, 5, 5, 4, 4])
    ),
    fiveBonusTokens: shuffle(
      generateTokens(BONUS_TOKENS.FIVE, [10, 10, 9, 8, 8])
    ),

    market: generateCards(CARD.CAMEL, 3),

    [PLAYER.P1]: {
      hand: [],
      herd: [],
    } as PlayerCards,
    [PLAYER.P2]: {
      hand: [],
      herd: [],
    } as PlayerCards,
  };
}
