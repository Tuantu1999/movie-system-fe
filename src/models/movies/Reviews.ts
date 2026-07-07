import type { Users } from "@/models/users/UsersModel";
import type { Movies } from "./Movies";

export interface Reviews {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: Users;
  movie: Movies;
  comment: string;
  rating: number;
}
