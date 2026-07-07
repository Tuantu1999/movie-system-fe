import type { Vouchers } from "../bookings/Vouchers";
import type { Users } from "./UsersModel";

export interface UserVouchers {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: Users;
  voucher: Vouchers;
  used: boolean;
}
