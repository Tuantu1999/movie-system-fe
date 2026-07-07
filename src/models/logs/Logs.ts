import type { Users } from "../users/UsersModel";

export interface Logs {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: Users;
  action: string;
  entityName: string;
  entityId: string;
  oldValue: string;
  newValue: string;
  ipAddress: string;
  userAgent: string;
}
