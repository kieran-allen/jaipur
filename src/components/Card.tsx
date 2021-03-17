import React from "react";
import { Card as CardType } from "../types";
import { getCardClassName } from "../utils/getCardClassName";

type Props = {
  card: CardType;
  onClick?: () => void;
};

export function Card({ card, onClick }: Props) {
  const className = getCardClassName(card.type);
  return <div className={`card ${className}`} onClick={onClick} />;
}
