import type { Bookings } from "./Bookings";

export interface Payments {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  booking: Bookings;
  amount: number;
  method: string;
  status: string;
  transactionCode: string;
  paymentTime: Date;
}
