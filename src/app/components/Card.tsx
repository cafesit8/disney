"use client"
import { Card } from '@/app/interfaces'
import { useStore } from '@/app/store/zustand'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface PropsCard {
    movie: Card,
}

export default function Card({movie}: PropsCard) {
  const { getMovieDetails, getRecomendationsMovie, getImagesMovie, getImagesSeriesTv, getRecomendationSeriesTv, getSeriesDetails } = useStore()
  const navigate = useRouter()
  function handleClick(){
    if(movie.title){
      getMovieDetails(movie.id)
      getRecomendationsMovie(movie.id)
      getImagesMovie(movie.id)
      navigate.push(`/movie/${movie.title}`)
    }else if(movie.name){
      getSeriesDetails(movie.id)
      getRecomendationSeriesTv(movie.id)
      getImagesSeriesTv(movie.id)
      navigate.push(`/series/${movie.name}`)
    }
  }
  return (
    <div className="rounded-md overflow-hidden">
      <article className='flex flex-col overflow-hidden rounded-md bg-[#252a3d] sm:h-[440px] h-[300px]'>
        <picture onClick={handleClick} className='w-full h-[70%] overflow-hidden'>
          <Image placeholder='empty' blurDataURL={movie.poster_path} priority={false} className="hover:scale-105 w-full h-full object-cover duration-200 cursor-pointer" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.overview} width={300} height={500} />
        </picture>
        <div className='w-full h-[30%] p-2 text-white flex flex-col justify-center overflow-hidden'>
          <h3 className='font-bold sm:text-[17px] text-[13px]'>{movie.title}{movie.name}</h3>
          <small className='block sm:text-[14px] text-[10px]'>Origen Title: {movie.original_title}</small>
          <small className='block sm:text-[14px] text-[10px]'>Popularity: {movie.popularity}</small>
        </div>
      </article>
    </div>
  )
}
