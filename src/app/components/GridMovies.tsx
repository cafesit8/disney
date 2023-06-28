import { Result } from "@/app/interfaces"
import Portada from "./Portada"

interface GridMoviesProps {
    movies: Result[]
}

export default function GridMovies({movies}: GridMoviesProps) {
  return (
    <section className="w-full min-h-screen bg-[#171a25] text-white p-5 flex">
        <main className="w-[75%]">
            <h2 className="text-[25px] pl-5">Movies in Trending</h2>
            <section className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 w-full p-6">
                {movies.map((movie) => (
                    <Portada movie={movie} key={movie.id} />
                ))}
            </section>
        </main>
        <aside className="w-[25%] border-2">

        </aside>
    </section>
  )
}
