import type { ShowTimes } from "../movies/ShowTimes";
import type { Bookings } from "./Bookings";
import type { Seats } from "./Seats";

export interface BookingSeats {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  booking: Bookings;
  seat: Seats;
  showTime: ShowTimes;
}
