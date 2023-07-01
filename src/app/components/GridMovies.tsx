import { Card as CardInterface } from "@/app/interfaces"
import Card from "./Card"

interface GridMoviesProps {
    movies: CardInterface[],
    asideData: CardInterface[]
}

export default function GridMovies({movies, asideData}: GridMoviesProps) {
  return (
    <section className="w-full min-h-screen bg-[#171a25] text-white p-5 flex">
        <main className="2xl:w-[1920px] m-auto w-full py-5">
            <h2 className="sm:text-4xl text-[30px] font-sans mb-5">Movies in Trending</h2>
            <section className="grid sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid-cols-[repeat(auto-fit,minmax(130px,1fr))] sm:gap-6 gap-3">
                {movies.map((movie) => (
                    <Card movie={movie} key={movie.id} />
                ))}
            </section>
        </main>
        {/* <aside className="w-[30%] border-2">
            <h2 className="sm:text-4xl text-[30px] pl-5 font-sans">Most Views</h2>
            <section className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 w-full p-4">
                {asideData.map(movie => (
                    <Card movie={movie} key={movie.id} />
                ))}
            </section>
        </aside> */}
    </section>
  )
}
