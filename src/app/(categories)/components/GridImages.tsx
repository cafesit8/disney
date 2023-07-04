"use client"
import { useStore } from "@/app/store/zustand"
import Image from 'next/image'

export default function GridImages() {
  const { images } = useStore()
  return (
    <section className="w-full h-full py-14 mb-10 bg-[#171a25]">
      <h3 className="text-white text-2xl">Imágenes:</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:gap-6 gap-4">
        {images.slice(0, 10).map(image => (
          <picture key={image.file_path} className="w-full h-full">
            <Image className="object-cover" src={`https://image.tmdb.org/t/p/w500${image.file_path}`} alt='imagenes' width={500} height={500}  />
          </picture>
        ))}
      </div>
    </section>
  )
}
