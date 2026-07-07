import http from "./http";

interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  poster: string;
}

export const movieAPI = {
  // Get all movies
  getAllMovies(params?: any) {
    return http.get<any, any>("/movies", { params });
  },

  // Get movie by id
  getMovieById(id: number) {
    return http.get<any, any>(`/movies/${id}`);
  },

  // Create movie
  createMovie(data: Omit<Movie, "id">) {
    return http.post<any, any>("/movies", data);
  },

  // Update movie
  updateMovie(id: number, data: Partial<Movie>) {
    return http.put<any, any>(`/movies/${id}`, data);
  },

  // Delete movie
  deleteMovie(id: number) {
    return http.delete<any, any>(`/movies/${id}`);
  },

  // Search movies
  searchMovies(keyword: string) {
    return http.get<any, any>("/movies/search", { params: { q: keyword } });
  },
};
