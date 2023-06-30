import { Card } from '@/app/interfaces'
import Image from 'next/image'

interface CardProps {
    info: Card
}

export default function CardPresentation({info}: CardProps) {
  return (
    <article className='mx-[5%] max-w-[1280px] flex gap-5 items-center z-20'>
        <div className='min-w-[300px] h-full overflow-hidden rounded-lg lg-max:hidden'>    
            <Image className='w-full h-full' alt={info.title} src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} width={800} height={500} />
        </div>
        <div className='w-full'>
            <h2 className='sm:text-[55px] text-[30px] font-extrabold'>{info.title}</h2>
            <div className='flex flex-col'>
                <span className='text-gray-300'>Original Lenguage: {info.original_language}</span>
                <span className='text-gray-300'>Popularity: {info.popularity}</span>
                <span className='text-gray-300'>Release Date: {info.release_date}</span>
            </div>
            <p className='sm:text-[17px] text-[15px]'>{info.overview}</p>
        </div>
    </article>
  )
}
