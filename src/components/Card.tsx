import React from "react";
import { Card as CardType } from "../types";
import { getCardClassName } from "../utils/getCardClassName";

type Props = {
  card: CardType;
};

export function Card({ card }: Props) {
  const className = getCardClassName(card.type);
  return <div className={`card ${className}`} />;
}
