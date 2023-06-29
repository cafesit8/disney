import { ResultMoviesTopRated } from '@/app/interfaces'
import Image from 'next/image'

interface CardProps {
    info: ResultMoviesTopRated
}

export default function Card({info}: CardProps) {
  return (
    <article className='mx-[5%] max-w-[1280px] flex gap-5 items-center'>
        <div className='w-[500px] h-full overflow-hidden rounded-lg'>    
            <Image className='w-full h-full' alt={info.title} src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} width={800} height={500} />
        </div>
        <div className='w-full'>
            <h2 className='text-[55px] font-extrabold'>{info.title}</h2>
            <div className='flex flex-col'>
                <span className='text-gray-300'>Original Lenguage: {info.original_language}</span>
                <span className='text-gray-300'>Popularity: {info.popularity}</span>
                <span className='text-gray-300'>Release Date: {info.release_date}</span>
            </div>
            <p className='text-[17px]'>{info.overview}</p>
        </div>
    </article>
  )
}
