"use client"
import { Card } from '@/app/interfaces'
import { useStore } from '@/app/store/zustand'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface PropsCard {
    movie: Card,
}

export default function Card({movie}: PropsCard) {
  const { getMovieDetails } = useStore()
  const navigate = useRouter()
  function handleClick(){
    getMovieDetails(movie.id)
    navigate.push(`/movie/${movie.title}`)
  }
  return (
    <div className="rounded-md overflow-hidden">
      <article className='flex flex-col overflow-hidden rounded-md bg-[#252a3d] h-[440px]'>
        <picture onClick={handleClick} className='w-full h-[80%] overflow-hidden'>
          <Image className="hover:scale-105 w-full h-full object-cover duration-200 cursor-pointer" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={300} height={500} />
        </picture>
        <div className='w-full h-[20%] p-2 text-white'>
          <h3 className='font-bold text-[17px]'>{movie.title}</h3>
          <p>Origen Title: {movie.original_title}</p>
          <small>Popularity: {movie.popularity}</small>
        </div>
      </article>
    </div>
  )
}
