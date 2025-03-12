import { ICardMovie } from "./InterfaceMovie";

export interface User {
  name: string;
  isLogined: boolean;
  items: ICardMovie[];
}