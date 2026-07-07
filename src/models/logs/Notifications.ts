import type { Users } from "../users/UsersModel";

export interface Notifications {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: Users;
  title: string;
  content: string;
  isRead: boolean;
  type: string;
}
