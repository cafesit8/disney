import Poster from '@/app/view/Poster'
import Recomendations from '@/app/components/Recomendation'
import GridImages from './components/GridImages'

export default function Page() {
  return (
    <main className=''>
      <Poster />
      <section className='bg-[#171a25] w-full'>
        <div className='max-w-[1800px] m-auto h-full sm:px-6 px-4 py-10'>
          <GridImages />
          <Recomendations />
        </div>
      </section>
    </main>
  )
}
