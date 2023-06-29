import Bg from '@/app/components/bg';
import { ResultMoviesTopRated } from '@/app/interfaces'
import Image from 'next/image'
import Card from '../components/Card';

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
          return result.results.filter((item: any) => item.backdrop_path !== null);
        }
    } catch (err) {
        console.error(err);
    }
}

export default async function page() {
  const results: ResultMoviesTopRated[] = await getMoviesTopRated();
  const present = results[Math.floor(Math.random() * results.length)]

  return (
    <>
        <section className='w-full h-screen bg-background relative text-white flex justify-start items-center'>
            <Bg image={present.backdrop_path} />
            <Card info={present} />
        </section>
        <section className='w-full min-h-screen bg-[#171a25] px-6 py-10'>
            <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6'>
                {results.map(movie => (
                    <article key={movie.id} className='w-full h-full'>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={500} height={500} />
                    </article>
                ))}
            </div>
        </section>
    </>
  )
}
