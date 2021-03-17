import React, { useContext } from "react";
import { MarketContext } from "../context/MarketContext";
import { CARD, Card as CardType } from "../types";
import { getCardClassName } from "../utils/getCardClassName";
import { isCamel } from "../utils/isCamel";

type Props = {
  card: CardType;
  onClick?: () => void;
};

export function Card({ card, onClick }: Props) {
  const mCtx = useContext(MarketContext);
  const className = getCardClassName(card.type);

  const onMouseEnter = () => {
    if (isCamel(card)) {
      mCtx.setIsCamelHovered(true);
    }
  };

  const onMouseLeave = () => {
    if (isCamel(card)) {
      mCtx.setIsCamelHovered(false);
    }
  };

  const c = mCtx.isCamelHovered && isCamel(card) && "transform scale-110";

  return (
    <div
      className={`card ${className} ${c}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
