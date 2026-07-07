import type { Users } from "./UsersModel";

export interface LoyaltyPoints {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  points: number;
  user: Users;
  type: string;
  description: string;
}
