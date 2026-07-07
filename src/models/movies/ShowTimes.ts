import type { Movies } from "./Movies";
import type { Rooms } from "./Rooms";

export interface ShowTimes {
  id: string;
  movie: Movies;
  room: Rooms;
  startTime: Date;
  endTime: Date;
  price: number;
}
