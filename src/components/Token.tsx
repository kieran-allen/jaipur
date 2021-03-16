import React from "react";
import { Token } from "../types";

type Props<T> = {
  token: Token<T>[];
};

export function Token<T>({ token: [head, ...rest] }: Props<T>) {
  return <div className="token">{head.value}</div>
}
