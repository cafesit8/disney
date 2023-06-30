import { Card } from '@/app/interfaces'
import Image from 'next/image'

interface PropsBg {
    image: Card['backdrop_path']
}

export default function Bg({image}: PropsBg) {
  return (
    <picture className='w-full h-full absolute top-0 left-0 -z-10'>
      <Image priority={true} className='absolute top-0 left-0 w-full h-full z-[-1] object-cover' src={`https://image.tmdb.org/t/p/w1280${image}`} alt="bg" width={1280} height={800} />
    </picture>
  )
}
