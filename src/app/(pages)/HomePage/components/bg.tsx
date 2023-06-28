import { TvResult } from '@/app/interfaces'
import Image from 'next/image'

interface PropsBg {
    image: TvResult
}

export default function Bg({image}: PropsBg) {
  return (
    <Image priority={true} className='absolute top-0 left-0 w-full h-full z-[-1] object-cover' src={`https://image.tmdb.org/t/p/w1280${image.backdrop_path}`} alt="bg" width={1280} height={800} />
  )
}
