import Bg from '@/app/components/bg';
import { SeriesTv } from '@/app/interfaces'
import CardPresentation from '../components/CardPresentation';
import Card from '@/app/components/Card'

async function getSeriesTv(){
    try {
        const response = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2N2RmNzlmOTc2ZjliMGM1YmQ1MzZkOTZhZTBhNiIsInN1YiI6IjY0NzUzMjU0OTYzODY0MDExODQ3OWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-a2O2Ji_wMLlhHyPNRVufrygQdwoBL4PmFkBUNPfvpU'
          }
        });
      
        if (response.ok) {
          const result = await response.json();
          return result.results.filter((item: SeriesTv) => item.poster_path !== null && item.overview != '')
        }
      
    } catch (err) {
        console.error(err);
    }
}

export default async function SeriesPage() {
  const data: SeriesTv[] = await getSeriesTv()
  const present = data[Math.floor(Math.random() * data.length)]
  return (
    <>
        <section className='w-full h-screen bg-background text-white flex justify-start items-center relative bg-gradient'>
            <Bg image={present.backdrop_path} />
            <CardPresentation info={present} />
        </section>
        <section className='w-full min-h-screen bg-[#171a25] sm:px-6 px-3 py-10'>
            <div className='w-full grid sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid-cols-[repeat(auto-fit,minmax(130px,1fr))] sm:gap-6 gap-3'>
                {data.map(item => (
                    <Card key={item.id} movie={item} />
                ))}
            </div>
        </section>
    </>
  )
}
