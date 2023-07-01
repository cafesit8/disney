import Bg from '@/app/components/bg';
import { Card as CardInterface } from '@/app/interfaces'
import CardPresentation from '../components/CardPresentation';
import Card from '@/app/components/Card'

async function getMoviesTopRated(){
    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2N2RmNzlmOTc2ZjliMGM1YmQ1MzZkOTZhZTBhNiIsInN1YiI6IjY0NzUzMjU0OTYzODY0MDExODQ3OWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-a2O2Ji_wMLlhHyPNRVufrygQdwoBL4PmFkBUNPfvpU`
          }
        });
      
        if (response.ok) {
          const result = await response.json();
          return result.results.filter((item: CardInterface) => item.backdrop_path !== null);
        }
    } catch (err) {
        console.error(err);
    }
}

export default async function MoviePage() {
  const results: CardInterface[] = await getMoviesTopRated();
  const present = results[Math.floor(Math.random() * results.length)]

  return (
    <>
        <section className='w-full h-screen bg-background relative text-white flex justify-start items-center'>
          <Bg image={present.backdrop_path} />
          <CardPresentation info={present} />
        </section>
        <section className='w-full min-h-screen bg-[#171a25] sm:px-6 px-3 py-10'>
          <div className='w-full grid sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid-cols-[repeat(auto-fit,minmax(130px,1fr))] sm:gap-6 gap-3'>
            {results.map(movie => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
    </>
  )
}
