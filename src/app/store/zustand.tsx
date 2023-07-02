import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { RootMoviesDetails, Images, Card } from '../interfaces'

interface PropsStore {
  details: Partial<RootMoviesDetails>;
  getMovieDetails: (id: number) => void;
  recomendations: Card[];
  getRecomendationsMovie: (id: number) => void;
  images: Images[];
  getImagesMovie: (id: number) => void;
  getSeriesDetails: (id: number) => void;
  getImagesSeriesTv: (id: number) => void;
  getRecomendationSeriesTv: (id: number) => void;
}

export const useStore = create(
  persist<PropsStore>((set) => ({
    details: {},
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
            details: result
          }))
        }
      } catch (err) {
        console.error(err);
      }
    },
    getRecomendationsMovie: async (id: number) => {
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
          const list: Card[] = result.results
          set(state => ({recomendations: list.filter(item => item.title !== 'Gate')}))
        }
      } catch (err) {
        console.error(err);
      }
    },
    getImagesMovie: async (id: number) => {
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
    },
    getSeriesDetails: async (id: number) => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2N2RmNzlmOTc2ZjliMGM1YmQ1MzZkOTZhZTBhNiIsInN1YiI6IjY0NzUzMjU0OTYzODY0MDExODQ3OWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-a2O2Ji_wMLlhHyPNRVufrygQdwoBL4PmFkBUNPfvpU'
          }
        });
      
        if (response.ok) {
          const result = await response.json();
          set(state => ({
            details: result
          }))
        }
      } catch (err) {
        console.error(err);
      }
    },
    getImagesSeriesTv: async (id: number) => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/images`, {
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
    },
    getRecomendationSeriesTv: async (id: number) => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`, {
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
    }
  }),
  {
    name: 'details'
  })
);
