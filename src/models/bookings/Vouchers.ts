import type { Users } from "../users/UsersModel";

export interface Vouchers {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  expirationDate: Date;
  code: string;
  discountType: string;
  value: number;
  active: boolean;
}
