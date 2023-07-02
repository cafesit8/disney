import Poster from "@/app/view/Poster";
import GridImages from "../../components/GridImages";
import Recomendations from "@/app/components/Recomendation";

export default function page() {
  return (
    <main>
      <Poster />
      <section className="bg-[#171a25] w-full">
        <div className='max-w-[1800px] m-auto h-full sm:px-6 px-4 py-10'>
            <GridImages />
            <Recomendations />
        </div>
      </section>
    </main>
  )
}
