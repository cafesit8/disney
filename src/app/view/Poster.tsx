"use client"
import Bg from "@/app/components/bg"
import Button from '@/app/components/Button'
import { useStore } from "@/app/store/zustand"

export default function Poster() {
    const { details } = useStore()
    return (
      <section className="w-full h-screen bg-[rgba(23,26,37,0.7)] relative text-white flex items-center">
        <Bg image={details.backdrop_path!} />
        <article className='ml-[5%] max-w-[800px] mr-[5%] flex flex-col gap-2 z-30'>
            <h1 className='sm:text-6xl text-[30px] font-bold'>{details.title}{details.name}</h1>
            <div className="flex gap-4">
              {details.genres?.map(genre => (
                <span className="font-medium text-white text-lg font-sans" key={genre.id}>{genre.name}</span>
              ))}
            </div>
            <p className='sm:text-[17px] text-[15px]'>{details.overview}</p>
            <p className="text-white font-bold">Popularity: <span className="text-gray-300 font-normal">{details.popularity}</span></p>
            <p className="text-white font-bold">Status: <span className="text-gray-300 font-normal">{details.status}</span></p>
            <Button text='Ver Ahora' />
        </article>
      </section>
    )
}
