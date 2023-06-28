import { create } from "zustand";
import { TvResult } from '../interfaces'

interface PropsStore {
    tv: TvResult[],
    getDataTv: () => void
}

export const useStore = create<PropsStore>((set) => ({
  tv: [],
  getDataTv: async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?language=es-MX",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2N2RmNzlmOTc2ZjliMGM1YmQ1MzZkOTZhZTBhNiIsInN1YiI6IjY0NzUzMjU0OTYzODY0MDExODQ3OWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-a2O2Ji_wMLlhHyPNRVufrygQdwoBL4PmFkBUNPfvpU",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        // setData(result.results);
        set(state => ({
            tv: result.results
        }))
      }
    } catch (err) {
      console.error(err);
    }
  },
}));
