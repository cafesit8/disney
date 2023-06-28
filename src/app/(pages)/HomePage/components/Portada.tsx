"use client"
import { Result } from '@/app/interfaces'
import { useStore } from '@/app/store/zustand'
import Image from 'next/image'

interface PropsCard {
    movie: Result
}

export default function Portada({movie}: PropsCard) {
  const { getMovieDetails } = useStore()
  console.log(typeof movie.id)
  return (
    <div className="rounded-md overflow-hidden" key={movie.id}>
      <article className='flex flex-col overflow-hidden rounded-md bg-[#252a3d] h-[440px]'>
        <picture onClick={() => getMovieDetails(movie.id)} className='w-full h-[80%] overflow-hidden'>
          <Image className="hover:scale-105 w-full h-full object-cover duration-200 cursor-pointer" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={300} height={500} />
        </picture>
        <div className='w-full h-[20%] p-2'>
          <h3 className='font-bold text-[17px]'>{movie.title}</h3>
          <p>Origen: {movie.original_language}</p>
          <small>Popularity: {movie.popularity}</small>
        </div>
      </article>
    </div>
  )
}
