import React from "react";
import { CARD, Token } from "../types";
import { getCardClassName } from "../utils/getCardClassName";

type Props = {
  token: Token<CARD>[];
};

export function Token({ token: [head, ...rest] }: Props) {
  const className = getCardClassName(head.token);
  return (
    <div className={`token flex justify-center items-center text-2xl text-white font-bold ${className}`}>
      <span>{head.value}</span>
    </div>
  );
}
