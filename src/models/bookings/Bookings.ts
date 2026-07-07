import type { ShowTimes } from "../movies/ShowTimes";
import type { Users } from "../users/UsersModel";

export interface Bookings {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: Users;
  showTime: ShowTimes;
  totalPrice: number;
  status: string;
  bookingTime: Date;
}
