import { create } from "zustand";
import { RootMoviesDetails, Images, Card } from '../interfaces'

interface PropsStore {
  movieDetails: Partial<RootMoviesDetails>;
  getMovieDetails: (id: number) => void;
  recomendations: Card[];
  getRecomendations: (id: number) => void;
  images: Images[];
  getImages: (id: number) => void;
}

export const useStore = create<PropsStore>((set) => ({
  movieDetails: {},
  recomendations: [],
  images: [],
  videos: [],
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
  },
  getRecomendations: async (id: number) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2N2RmNzlmOTc2ZjliMGM1YmQ1MzZkOTZhZTBhNiIsInN1YiI6IjY0NzUzMjU0OTYzODY0MDExODQ3OWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-a2O2Ji_wMLlhHyPNRVufrygQdwoBL4PmFkBUNPfvpU'
        }
      });
    
      if (response.ok) {
        const result = await response.json();
        set(state => ({recomendations: result.results}))
      }
    } catch (err) {
      console.error(err);
    }
  },
  getImages: async (id: number) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/images`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2N2RmNzlmOTc2ZjliMGM1YmQ1MzZkOTZhZTBhNiIsInN1YiI6IjY0NzUzMjU0OTYzODY0MDExODQ3OWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-a2O2Ji_wMLlhHyPNRVufrygQdwoBL4PmFkBUNPfvpU'
        }
      });
    
      if (response.ok) {
        const result = await response.json();
        set(status => ({images: result.backdrops}))
      }
    } catch (err) {
      console.error(err);
    }
  }
}));
