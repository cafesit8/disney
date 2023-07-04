import Bg from './components/bg'
import { Card } from './interfaces'
import Button from './components/Button'
import GridMovies from './components/GridMovies';

async function getDataTv() {
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2N2RmNzlmOTc2ZjliMGM1YmQ1MzZkOTZhZTBhNiIsInN1YiI6IjY0NzUzMjU0OTYzODY0MDExODQ3OWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-a2O2Ji_wMLlhHyPNRVufrygQdwoBL4PmFkBUNPfvpU'
      }
    });
  
    if (response.ok) {
      const result = await response.json();
      return result.results.filter((item: Card) => item.backdrop_path !== null && item.overview !== '');
    }
  } catch (err) {
    throw new Error('Error en la petición');
  }
}

export default async function HomePage() {
  const data: Card[] = await getDataTv();
  const selected = data[Math.floor(Math.random() * data.length)]

  return (
    <>
      <section className={`w-full h-screen bg-[rgba(23,26,37,0.7)] relative text-white flex justify-start items-center bg-gradient`}>
        <Bg image={selected.backdrop_path} />
        <article className='ml-[5%] max-w-[600px] mr-[5%] flex flex-col gap-2 z-30'>
          <h1 className='sm:text-6xl text-[30px] font-bold'>{selected.title}</h1>
          <p className='sm:text-[17px] text-[15px]'>{selected.overview}</p>
          <Button text='Ver más' />
        </article>
      </section>
      <GridMovies movies={data} />
    </>
  )
}
