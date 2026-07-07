export interface Users {
  id: string;
  lastLoginAt: Date;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  age: number;
  userName: string;
  password: string;
  role: string;
  phone: string;
  avatarUrl: string;
  active: boolean;
  deleted: boolean;
  rewardPoints: number;
}
