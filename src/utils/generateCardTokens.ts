import { v4 as uuidv4 } from "uuid";

export function generateTokens<T>(token: T, arrayOfValues: number[]) {
  return arrayOfValues.map((value) => ({
    id: uuidv4(),
    value,
    token,
  }));
}
