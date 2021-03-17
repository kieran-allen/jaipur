import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { Token } from "./Token";

export function Tokens() {
  const { state } = useContext(GameContext);

  return (
    <div className="flex flex-col">
      <Token token={state.diamondTokens} />
      <Token token={state.goldTokens} />
      <Token token={state.silverTokens} />
      <Token token={state.clothTokens} />
      <Token token={state.spiceTokens} />
      <Token token={state.leatherTokens} />
    </div>
  );
}
