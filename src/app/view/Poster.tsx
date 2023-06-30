"use client"
import Bg from "@/app/components/bg"
import Button from '@/app/components/Button'
import { useStore } from "@/app/store/zustand"

export default function Poster() {
    const { movieDetails } = useStore()
    return (
      <section className="w-full h-screen bg-[rgba(23,26,37,0.7)] relative text-white flex items-center">
        <Bg image={movieDetails.backdrop_path!} />
        <article className='ml-[5%] max-w-[800px] mr-[5%] flex flex-col gap-2 z-30'>
            <h1 className='sm:text-6xl text-[30px] font-bold'>{movieDetails.title}</h1>
            <div className="flex gap-4">
              {movieDetails.genres?.map(genre => (
                <span className="font-medium text-white text-lg font-sans" key={genre.id}>{genre.name}</span>
              ))}
            </div>
            <p className='sm:text-[17px] text-[15px]'>{movieDetails.overview}</p>
            <p className="text-white font-bold">Popularity: <span className="text-gray-300 font-normal">{movieDetails.popularity}</span></p>
            <p className="text-white font-bold">Status: <span className="text-gray-300 font-normal">{movieDetails.status}</span></p>
            <Button text='Ver Ahora' />
        </article>
      </section>
    )
}
