import type { Rooms } from "../movies/Rooms";

export interface Seats {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  room: Rooms;
  seatRow: string;
  seatNumber: number;
  type: string;
}
