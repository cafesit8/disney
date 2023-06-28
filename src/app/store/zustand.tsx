import { create } from "zustand";
import { RootMoviesDetails } from '../interfaces'

interface PropsStore {
  movieDetails: RootMoviesDetails;
  getMovieDetails: (id: number) => void;
}

export const useStore = create<PropsStore>((set) => ({
  movieDetails: {},
  getMovieDetails: async (id: number) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2N2RmNzlmOTc2ZjliMGM1YmQ1MzZkOTZhZTBhNiIsInN1YiI6IjY0NzUzMjU0OTYzODY0MDExODQ3OWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-a2O2Ji_wMLlhHyPNRVufrygQdwoBL4PmFkBUNPfvpU'
        }
      });
    
      if (response.ok) {
        const result = await response.json();
        set(state => ({
          movieDetails: result
        }))
      }
    } catch (err) {
      console.error(err);
    }
  }
}));
