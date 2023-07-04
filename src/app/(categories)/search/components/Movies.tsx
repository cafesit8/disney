"use client"
import { ChangeEvent, useState, useEffect } from 'react'
import Search from '@/app/components/Search'
import GridMovies from '@/app/components/GridMovies'
import { Card } from '@/app/interfaces';
import NotFound from './NotFound';

export default function Movies() {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState<Card[]>([])
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => setText(target.value);

  useEffect(() => {
    movies.length === 0 && getMovies();
  }, [movies])

async function searchMovies(){
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?page=1&query=${text}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2N2RmNzlmOTc2ZjliMGM1YmQ1MzZkOTZhZTBhNiIsInN1YiI6IjY0NzUzMjU0OTYzODY0MDExODQ3OWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-a2O2Ji_wMLlhHyPNRVufrygQdwoBL4PmFkBUNPfvpU'
          }
        });
      
        if (response.ok) {
          const result = await response.json();
          setMovies(result.results.filter((item: Card) => item.backdrop_path !== null && item.overview !== ''));
        }
      } catch (err) {
        console.error(err);
    }
}
async function getMovies(){
    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2", {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2N2RmNzlmOTc2ZjliMGM1YmQ1MzZkOTZhZTBhNiIsInN1YiI6IjY0NzUzMjU0OTYzODY0MDExODQ3OWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-a2O2Ji_wMLlhHyPNRVufrygQdwoBL4PmFkBUNPfvpU'
          }
        });
      
        if (response.ok) {
          const result = await response.json();
          const list = result.results.filter((item: Card) => item.backdrop_path !== null && item.overview !== '');
          setMovies(list);
        }
      } catch (err) {
        throw new Error('Error en la petición');
      }
  }


  return (
    <div>
        <article className='sm:px-0 px-4'>
            <Search text={text} onChange={onChange} searchMovies={searchMovies} />
        </article>
        {movies?.length > 0 && <GridMovies movies={movies} />}
    </div>
  )
}
