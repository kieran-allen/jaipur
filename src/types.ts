export enum CARD {
  DIAMOND,
  GOLD,
  SILVER,
  CLOTH,
  SPICE,
  LEATHER,
  CAMEL,
}

export enum BONUS_TOKENS {
  THREE,
  FOUR,
  FIVE,
}

export enum PLAYER {
  P1,
  P2,
}

export type Card = {
  type: CARD,
  id: string,
}

export type ValuableCards = CARD.DIAMOND | CARD.GOLD | CARD.SILVER;
export type StandardCards = CARD.CLOTH | CARD.SPICE | CARD.LEATHER;

export type PlayerCards = {
  hand: Card[];
  herd: Card[];
  selectedCards: Card[];
};

export type Token<T> = {
  token: T;
  id: string;
  value: number;
};

export type GameState = {
  deck: Card[];

  diamondTokens: Token<CARD.DIAMOND>[];
  goldTokens: Token<CARD.GOLD>[];
  silverTokens: Token<CARD.SILVER>[];
  clothTokens: Token<CARD.CLOTH>[];
  spiceTokens: Token<CARD.SPICE>[];
  leatherTokens: Token<CARD.LEATHER>[];
  camelTokens: Token<CARD.CAMEL>[];

  threeBonusTokens: Token<BONUS_TOKENS.THREE>[];
  fourBonusTokens: Token<BONUS_TOKENS.FOUR>[];
  fiveBonusTokens: Token<BONUS_TOKENS.FIVE>[];

  market: Card[];
  selectedMarketCards: Card[];

  [PLAYER.P1]: PlayerCards;
  [PLAYER.P2]: PlayerCards;
};

export type GameContextType = {
  state: GameState;
  update: React.Dispatch<React.SetStateAction<GameState>>;
};
