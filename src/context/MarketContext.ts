import { createContext } from "react";

export const MarketContext = createContext<{
  isCamelHovered: boolean;
  setIsCamelHovered: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isCamelHovered: false,
  setIsCamelHovered: () => null,
});
