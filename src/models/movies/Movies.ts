export interface Movies {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  releaseDate: Date;
  title: string;
  description: string;
  duration: number;
  genre: string;
  director: string;
  cast: string;
  posterUrl: string;
  rating: number;
  status: string;
}
