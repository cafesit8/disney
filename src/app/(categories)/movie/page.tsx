import { ResultMoviesTopRated } from '@/app/interfaces'

async function getMoviesTopRated(){
    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2N2RmNzlmOTc2ZjliMGM1YmQ1MzZkOTZhZTBhNiIsInN1YiI6IjY0NzUzMjU0OTYzODY0MDExODQ3OWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-a2O2Ji_wMLlhHyPNRVufrygQdwoBL4PmFkBUNPfvpU'
          }
        });
      
        if (response.ok) {
          const result = await response.json();
          return result.results;
        }
    } catch (err) {
        console.error(err);
    }
}

export default async function page() {
  const results: ResultMoviesTopRated[] = await getMoviesTopRated();
  return (
    <section>
        Esta es la pagina de top Películas
    </section>
  )
}
