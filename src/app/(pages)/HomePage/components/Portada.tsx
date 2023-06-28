import { TvResult } from '@/app/interfaces'
import Image from 'next/image'

interface PropsCard {
    movie: TvResult
}

export default function Portada({movie}: PropsCard) {
  return (
    <div className="rounded-md overflow-hidden" key={movie.id}>
      <article className='flex flex-col overflow-hidden rounded-md bg-[#252a3d] h-[440px]'>
        <picture className='w-full h-[80%] overflow-hidden'>
          <Image className="hover:scale-105 w-full h-full object-cover duration-200 cursor-pointer" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} width={300} height={500} />
        </picture>
        <div className='w-full h-[20%] p-2'>
          <h3 className='font-bold text-[20px]'>{movie.name}</h3>
          <p>Origen: {movie.origin_country}</p>
          <small>Popularity: {movie.popularity}</small>
        </div>
      </article>
    </div>
  )
}
