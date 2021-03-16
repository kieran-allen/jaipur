import { createContext } from "react";
import { GameContextType } from "../types";
import { generateInitialGameState } from "../utils/generateInitialGameState";

export const GameContext = createContext<GameContextType>({
  state: generateInitialGameState(),
  update: () => null,
});
