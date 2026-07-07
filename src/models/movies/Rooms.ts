import type { Cinemas } from "./Cinemas";

export interface Rooms {
  id: string;
  cretedAt: Date;
  updatedAt: Date;
  cinema: Cinemas;
  name: string;
  totalSeats: number;
}
