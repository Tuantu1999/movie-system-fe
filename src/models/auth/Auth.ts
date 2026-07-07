import type { Users } from "../users/UsersModel";

export interface Auth {
  expiredAt: Date;
  token: string;
  user: Users;
}
